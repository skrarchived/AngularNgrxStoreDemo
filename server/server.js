const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const randtoken = require("rand-token");

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET = "secret";
const SECRET_REFRESH_TOKEN = "secret refresh token";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const RefreshTokens = {};

// function authCheck(req, res,next){
//     req
// }

// to handle the login and sending the Access and Refresh token
app.post("/login", (req, res) => {
  const { userid, password } = req.body;

  const User = {
    userid: userid,
    role: "Admin",
  };
  const token = jwt.sign(User, SECRET, { expiresIn: 60 });
  //   const refreshToken = randtoken.uid(256);
  const refreshToken = jwt.sign(User, SECRET_REFRESH_TOKEN, { expiresIn: 600 });

  RefreshTokens[refreshToken] = userid;
  res.json({ jwt: token, refresh: refreshToken });
});

//
app.post("/refresh", (req, res) => {
  const { refresh } = req.body;
  if (refresh in RefreshTokens) {
    try {
      jwt.verify(refresh, SECRET_REFRESH_TOKEN);
      const User = {
        userid: RefreshTokens[refresh],
        role: "Admin",
      };

      const token = jwt.sign(User, SECRET, { expiresIn: 60 });
      res.json({ jwt: token });
    } catch (err) {
      res.json({ message: "Refresh token Expired" });
    }
  } else {
    res.json({ message: "Token not Matched" });
  }
});

//
app.get("/random", (req, res) => {
  const AuthToken = req.header("authorization").split("Bearer ")[1];

  try {
    jwt.verify(AuthToken, SECRET);
    res.json({ value: Math.floor(Math.random() * 1000) });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Serving on ${PORT}`));
