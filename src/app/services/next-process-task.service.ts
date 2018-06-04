import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class NextProcessTaskService {
  constructor(
    private _http: HttpClient
  ) { }

  public taskRequest(phone, consolidation) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("phone", phone);
    params.set("consolidation", consolidation);
    params.set("v", String(version));
    return this._http.get('/rest/profile/getLastProcessLink', { params });
  };

  public getMostDistanceProcessInstance(pesel) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("pesel", pesel);
    params.set("v", String(version));
    return this._http.get('/rest/client/credits/getMostDistanceProcessInstance', { params });
  };

}
