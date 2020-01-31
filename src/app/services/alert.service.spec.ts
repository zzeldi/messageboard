import {AlertService} from "./alert.service";

describe('AlertService', () => {
  let service: AlertService;

  let alertText;

  beforeEach(() => {
    service = new AlertService();
    alertText = "TestALERT";
  })

  it('should return the given alert text', () => {

    const result$ = service.alert$.subscribe(value => {
      expect(value).toEqual('TestALERT');
      //done();
    })
    service.showAlert(alertText);
  });
})
