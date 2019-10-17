import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from './message';
import {environment} from '../../../environments/environment';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {
  }

  /**
   * retrives all the stored messages from the server
   */
  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(environment.SERVER_URL + '/api/messages/');
  }

  /**
   * sends the new message to the server
   * @param message
   */
  saveNewMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(environment.SERVER_URL + '/api/messages/' , message);
  }


}
