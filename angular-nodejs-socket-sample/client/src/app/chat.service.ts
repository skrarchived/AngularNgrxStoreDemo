import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket, private http: HttpClient) {
    // console.log(this.socket.of())
  }

  users = this.socket.fromEvent('users')
  messages = this.socket.fromEvent('messages')
  message = this.socket.fromEvent('message')

  public addUser() {
    this.socket.emit("addUser", { id: this.getId(), messages: [] })
  }

  getMessage(userid) {
    console.log("Getting ", userid, "messages")
    this.socket.emit("getMessages", { id: userid })
  }

  sendMessage(user){
    // console.log(user)
    this.socket.emit("addMessage", user)
  }

  // public sendMessage(message) {
  //   this.socket.emit('new-message', message);
  // }

  // public getMessages = () => {
  //   return new Observable((sunscriber) => {
  //     this.socket.on('message', (message) => {
  //       console.log("Me", message)
  //       sunscriber.next(message);
  //     });
  //   });
  // }

  getTestData(){
    return this.http.get('http://localhost:3000/data', {observe: 'response'})
  }

  public getId() {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
