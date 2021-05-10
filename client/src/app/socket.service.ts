import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from "ngx-socket-io";

class SocketNameSpace extends Socket {
  constructor(socketConfig: SocketIoConfig) {
    super(socketConfig)
  }
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  chat: SocketNameSpace
  constructor() {
    this.chat = new SocketNameSpace({
      url: "http://localhost:3000/chat",
      options: {}
    })
  }
}

