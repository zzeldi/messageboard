import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from './comment';
import {environment} from '../../../environments/environment';
import {map} from "rxjs/operators";

@Injectable()
export class CommentService {

  //todo error handling service

  constructor(private http: HttpClient) {
  }


  /**
   * sends the new comment to the backend and returns the whole message
   * @param comment
   */
  saveNewComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(environment.SERVER_URL + '/api/comments/', comment)
      .pipe(map(response => new Comment(response)));
  }

}
