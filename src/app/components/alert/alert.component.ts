import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {AlertService} from "../../services/alert.service";

/**
 * displeys an alert message for 5 sec
 */
// todo error service
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {



  private readonly onDestroy = new Subject<void>();
   errorMessage: string;

  private _hide = new Subject<string>();

  constructor(private alertService: AlertService) {
    alertService.alert$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(alert => {
        this.errorMessage = alert;
      })
  }

  ngOnInit() {
    // initialize the _hide subject what will hide the errorMessage
    this._hide.subscribe((message) => this.errorMessage = message);
    this._hide.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = null);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }


}
