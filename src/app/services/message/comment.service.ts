import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from './message';
import {Comment} from './comment';
import {environment} from '../../../environments/environment';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }


  /**
   * sends the new comment to the backend and returns the whole message
   * @param comment
   */
  saveNewComment(comment: Comment): Observable<Message> {
    return this.http.post<Message>(environment.SERVER_URL + '/api/comments/' , comment);
  }

}
