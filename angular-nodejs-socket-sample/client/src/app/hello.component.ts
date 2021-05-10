import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'hello',
  template: `
  <div>
    <h2>Hello Component</h2>
    <pre>
      {{data | async | json}}
    </pre>
    <button class="btn btn-primary" (click)="send()">Send</button>
  </div>
  `,
  styles: []
})
export class HelloComponent {
  data
  constructor(private socket: SocketService) {
    this.data = this.socket.chat.fromEvent('aa')
  }

  send() {
    this.socket.chat.emit('msg', "This is my data")
  }
}
