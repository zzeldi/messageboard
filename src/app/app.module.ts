import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MessageboardComponent} from './components/messageboard/messageboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageComponent} from './components/message/message.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MessageService} from './services/message/message.service';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertComponent} from './components/alert/alert.component';
import {CommentService} from './services/message/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageboardComponent,
    MessageComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbAlertModule
  ],
  providers: [MessageService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
