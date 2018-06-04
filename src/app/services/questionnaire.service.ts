import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class QuestionnaireService {
  constructor(
    private _http: HttpClient
  ) { }

  public setChoise(body) {
    return this._http.post('/rest/questionnaire/newProduct', { body });
  };

  public getResultOfInterview() {
    return this._http.get('/rest/questionnaire/newProduct')
  };

}
