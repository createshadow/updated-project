import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {GtmService} from "./gtm.service";


@Injectable()
export class BmRedemptiomthis {
  constructor(
    private _gtm: GtmService,
    private _http: HttpClient
  ) { }

  public getOrder(legalPayment, user) {
    var params = {legalPayment: legalPayment, user: user};
    return this._http.post('/rest/redemption/rorder', params).subscribe(res => {
      if (res.data === "") {
        console.warn("Order is empty!");
        return;
      }
      return res.data;
    }, function (error) {
      console.warn("getOrder: " + error.statusText)
    });
  };

  public submitBmForm(order) {
    if (order === "") return;
    let mapForm = document.createElement("form");
    mapForm.method = "POST";
    mapForm.style.display = 'none';
    mapForm.action = order['url'];//"https://pay-accept.bm.pl/payment";
    mapForm.appendChild(this.createInput('thisID', order['thisID']));
    mapForm.appendChild(this.createInput('OrderID', order['orderID']));
    mapForm.appendChild(this.createInput('Amount', parseFloat(order['amount']).toFixed(2)));
    mapForm.appendChild(this.createInput('GatewayID', order['gatewayID']));
    mapForm.appendChild(this.createInput('Description', order['description']));
    mapForm.appendChild(this.createInput('Currency', order['currency']));
    mapForm.appendChild(this.createInput('Title', order['title']));
    mapForm.appendChild(this.createInput('ValidityTime', order['validityTime']));
    mapForm.appendChild(this.createInput('VerificationFName', order['verificationFName']));
    mapForm.appendChild(this.createInput('VerificationLName', order['verificationLName']));
    mapForm.appendChild(this.createInput('VerificationNRB', order['verificationNRB']));
    mapForm.appendChild(this.createInput('Hash', order['hash']));
    document.body.appendChild(mapForm);
    this._gtm.sendData({
      'event' : 'submit',
      'screen' : 'bmRepaymentModal'
    });
    mapForm.submit();
  };

  private createInput(name, value) {
    let field = document.createElement("input");
    field.type = "text";
    field.name = name;
    field.setAttribute("value", value);
    return field;
  };
}
