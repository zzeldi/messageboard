import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageComponent} from './message.component';
import {Message} from "../../services/message/message";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommentService} from "../../services/message/comment.service";

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  let mockCommentService;

  let testMessage: Message;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [MessageComponent],
      // schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: CommentService, useValue: mockCommentService
      }],
      imports: [FormsModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;


  }));


  beforeEach(() => {
    testMessage = new Message();
    testMessage.userName = 'TestUser';
    testMessage.message = 'TestMessage';


    testMessage.comments = [];

    mockCommentService = jasmine.createSpyObj(['saveNewComment']);


    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;

    fixture.autoDetectChanges();

  });

  it('should display the correct testMessage', () => {
    fixture.componentInstance.message = testMessage;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#messageContainer')).nativeElement.textContent).toContain('TestMessage');
  })

 /* it('should be true fake async ', () => {
    fakeAsync(() => {
      fixture.componentInstance.message = testMessage;
      console.log(testMessage);
      fixture.detectChanges();
      tick();
      expect(true).toBe(true);
    })
    ;
  })

  it('should be true async ', async(() => {

    fixture.componentInstance.message = testMessage;
    console.log(fixture.componentInstance.message);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(true).toBe(true);
    });
  }));
*/
});
