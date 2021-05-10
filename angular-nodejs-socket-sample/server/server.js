const express = require('express')
const app = express();
const http = require('http');
const server = http.Server(app);
const cors = require('cors')

app.use(cors())
// app.options("*", cors())


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4201");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const socketIO = require('socket.io');
const io = socketIO(server);
const port = process.env.PORT || 3000;

const Data = {
  "abc123": {
    id: "abc123",
    messages: []
  }
}


io.on('connection', (socket) => {
  // console.dir(io, {depth: 0})
  // console.dir(socket.nsp, {depth: 0})
  console.log('user connected');

  let previousId;
  const safeJoin = (currentId) => {
    socket.leave(previousId);
    socket.join(currentId);
    previousId = currentId;
  };

  socket.on('getMessages', (user) => {
    safeJoin(user.id)
    socket.emit('messages', Data[user.id]);
  });

  socket.on('addUser', (user) => {
    Data[user.id] = user
    safeJoin(user.id)
    io.emit('users', Object.keys(Data))
    socket.emit("user", user)
  })

  socket.on('addMessage', (user) => {
    console.log(user)
    Data[user.userid].messages.push(user.message)
    socket.to(user.userid).emit("message", Data[user.userid])
  })

  io.emit("users", Object.keys(Data))
});


io.of('/chat').on('connection', (socket) => {
  console.log("User connected to Chat")

  let i = 0
  socket.on('msg', data => {
    console.log(data)
    socket.emit("aa", "This is Chat Data" + i)
    i++
  })

})

app.get('/data', (req, res) => {
  res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition')
  res.setHeader('Content-Disposition', "this is my data")
  res.json({ data: { message: "Hello World" } })
})


server.listen(port, () => {
  console.log(`started on port: ${port}`);
});