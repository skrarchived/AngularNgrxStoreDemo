import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newMessage: string;
  messageList: string[] = [];

  users = []
  messages;


  constructor(private chatService: ChatService) {
  }

  // sendMessage() {
  //   this.chatService.sendMessage(this.newMessage);
  //   this.newMessage = '';
  // }
  ngOnInit() {
    // this.chatService.getMessages()
    //   .subscribe((message: string) => {
    //     console.log("A", message)
    //     this.messageList.push(message);
    //   });

    // this.chatService.getTestData().subscribe(result => {
    //   console.log("RESULT", result)
    // })

    this.chatService.users.subscribe((users: any) => {
      this.users = users
    })

    this.chatService.messages.subscribe(messages => {
      console.log(messages)
      this.messages = messages
    })

    this.chatService.message.subscribe(result => {
      this.messages = result
      // console.log("MM : ", result)
    })
  }
  currentUserId
  loadMessage(userid) {
    this.currentUserId = userid
    this.chatService.getMessage(userid)
  }

  i = 0
  addMessage() {
    this.chatService.sendMessage({ userid: this.currentUserId, message: "Hello " + this.i })

    this.loadMessage(this.currentUserId)

    this.i++
  }

  addUser() {
    this.chatService.addUser();
    alert("User Added")
  }
}
