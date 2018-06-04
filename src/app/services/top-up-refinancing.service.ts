import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class TopUpRefinancingService {
  constructor(
    private _http: HttpClient
  ) { }

  public getActivePayDayLoans(pesel) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("pesel", pesel);
    params.set("v", String(version));
    return this._http.get('/rest/topup-refinancing/info', { params });
  };

}
