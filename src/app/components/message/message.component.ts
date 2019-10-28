import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../services/message/message';
import {Comment} from '../../services/message/comment';
import {CommentService} from '../../services/message/comment.service';

/**
 *  displays one message, and its comments
 */
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  /**
   * the current user's name
   */
  @Input() userName: string;

  /**
   * emitted when the user wants to save a comment but no username is provided
   */
  @Output() userNameMissing = new EventEmitter();

  /**
   * displays error if required fields are missing
   */
  formError = false;

  newCommentText: string;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
  }

  /**
   * checks the given data and saves the comment
   */
  onSave() {

    this.formError = true;
    if (this.newCommentText && this.newCommentText.length > 0
      // if every required field is filled
      && this.userName && this.userName.length > 0) {
      const newComment: Comment = new Comment();
      newComment.commentText = this.newCommentText;
      newComment.userName = this.userName;
      newComment.messageId = this.message.id;
      console.log(newComment);
      this.commentService.saveNewComment(newComment).subscribe(value => {
        this.newCommentText = '';
        this.message = new Message(value);
      });
    } else {
      // required fields are not filled
      this.formError = true;
      if (!this.userName || this.userName.length === 0) {
        this.userNameMissing.emit();
      }
    }
  }
}
