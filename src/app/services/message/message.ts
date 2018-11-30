/***
 * Message class
 */
import {Comment} from './comment';

export class Message {
  id: string;
  userName: string;
  date: Date;
  message: string;
  comments: Comment[];


  constructor(json?: any) {
    if (json != null) {
      this.id = json.id;
      this.userName = json.user_name;
      if (json.date) {
        this.date = new Date(json.date);
      }
      this.message = json.message;
      if (json.comments) {
        this.comments = Comment.toArray(json.comments);
      }
    }
  }

  /**
   * transforms the input array to an array of Message class
   * @param jsons  message jsons
   */
  static toArray(jsons: any[]): Message[] {
    const messages: Message[] = [];
    if (jsons != null) {
      for (const json of jsons) {
        messages.push(new Message(json));
      }
    }
    return messages;
  }

}
