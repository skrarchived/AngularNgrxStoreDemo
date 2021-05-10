import { Component,EventEmitter, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "shared-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  @Input() message;
  @Output() newMessage = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  clearMessage() {
    this.message = "";
    this.newMessage.emit(this.message);
  }
}
