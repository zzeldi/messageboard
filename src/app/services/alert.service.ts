import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  private alertSource = new Subject<string>();

  alert$ = this.alertSource.asObservable();

  showAlert(alert: string) {
    this.alertSource.next(alert);

    console.log('alert:', alert);
  }

}
