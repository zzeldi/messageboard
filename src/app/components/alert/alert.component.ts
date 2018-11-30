import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

/**
 * displeys an alert message for 5 sec
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input('errorMessage') set setMessage(msg: string) {
    this.errorMessage = msg;
    this._hide.next(msg);

  }


  errorMessage: string;

  private _hide = new Subject<string>();
  constructor() {
  }

  ngOnInit() {
    // initialize the _hide subject what will hide the errorMessage
    this._hide.subscribe((message) => this.errorMessage = message);
    this._hide.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = null);  }

}
