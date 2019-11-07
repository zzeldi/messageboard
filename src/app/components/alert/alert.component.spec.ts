import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertComponent} from './alert.component';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {By} from "@angular/platform-browser";

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let errorMessage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      imports: [NgbAlertModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    errorMessage = 'ErrorMessage';
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should display the given error message', () => {
    fixture.componentInstance.errorMessage = errorMessage;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#alert')).nativeElement.textContent).toContain('ErrorMessage');
  })

  it('should not display anything if no error',()=>{
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#alert'))).toBe(null);
  })

  it('should hide the message after 5000 minutes',()=>{
    fixture.componentInstance.errorMessage = errorMessage;

    fixture.detectChanges();
    //TODO
  })

});
