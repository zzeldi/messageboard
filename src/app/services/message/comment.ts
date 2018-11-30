/***
 * Comment class, contains the comments belonged to the message class
 */
export class Comment {
  id: string;
  userName: string;
  date: Date;
  commentText: string;
  messageId: string;

  constructor(json?: any) {
    if (json != null) {
      this.id = json.id;
      this.userName = json.user_name;
      if (json.date) {
        this.date = new Date(json.date);
      }
      this.commentText = json.commentText;
    }
  }

  /**
   * transforms the input array to an array of Comment class
   * @param jsons  commentText jsons
   */
  static toArray(jsons: any[]): Comment[] {
    const comments: Comment[] = [];
    if (jsons != null) {
      for (const json of jsons) {
        comments.push(new Comment(json));
      }
    }
    return comments;
  }

}
