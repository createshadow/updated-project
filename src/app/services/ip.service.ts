import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class IpService {
  constructor (
    private _http: HttpClient
  ) {}

  public getIp() {
    return this._http.get("https://freegeoip.net/json/");
  }

}
