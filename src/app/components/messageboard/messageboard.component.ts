import {Component, OnInit} from '@angular/core';
import {Message} from '../../services/message/message';
import {MessageService} from '../../services/message/message.service';

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.css']
})
export class MessageboardComponent implements OnInit {

  messages: Message[];
  newMessage: Message;
  /**
   * displays error if required fields are missing
   */
  formError = false;
  /**
   * displays user name error
   */
  userNameError = false;
  /**
   * if the user types the username once we will store it here
   */
  storedUsername: string;

  errorMessage = '';

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messages = [];
    this.newMessage = new Message();
    this.loadAllMessages();
  }

  /**
   * loads the messages from the server
   */
  loadAllMessages() {
    this.messageService.getMessages().subscribe(value => {
      this.messages = Message.toArray(value);
    });
  }

  /**
   * saves a new message
   *
   */
  onSave() {
    this.formError = false;
    // if all the required fields are filled
    this.newMessage.userName = this.storedUsername;
    if (this.newMessage.userName != null && this.newMessage.userName.length > 0
      && this.newMessage.message != null && this.newMessage.message.length > 0) {
      this.newMessage.comments = null;
      // save the message
      this.messageService.saveNewMessage(this.newMessage).subscribe(value => {
        // we will reload the messages - just in case other people has posted messages too
        this.loadAllMessages();
        this.newMessage = new Message();

      });
    } else {
      // required fields are not filled
      this.formError = true;
      this.errorMessage = 'Required fields are missing!';
    }
  }

  /**
   * refresh button clicked
   */
  onRefresh() {
    this.loadAllMessages();
    // todo peroidically auto reload the messages
  }

  /**
   * emitted by message component if the user wants to post a message but the username is missing
   */
  onUserNameMissingError() {
    this.userNameError = true;
    this.errorMessage = 'No user name was given!';
  }
}
