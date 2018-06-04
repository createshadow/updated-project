import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class QuestionsService {
  constructor (
    private _http: HttpClient
  ) { }

  public getQuestions(productStatus) {
    const params = new HttpParams();
    params.set("productStatus", productStatus);

    return this._http.get('/rest/feedback/info', { params });
  };

  public getFeedbacks(count) {
    const params = new HttpParams();
    params.set("count", count);

    return this._http.get('/rest/feedback/get/published', { params });
  };

  public getAllPublished() {
    return this._http.get('/rest/feedback/get/all/published');
  };

  public getAllFeedbacks() {
    return this._http.get('/rest/feedback/get/all');
  };

  public getAllFeedbacksInformation() {
    return this._http.get('/rest/feedback/get/allCount');
  };

  public save(client, comment, answers) {
    const body = {
      clientName: client.name,
      clientPesel: client.pesel,
      clientProfession: client.profession,
      clientComment: comment,
      product: client.productStatus,
      answers: answers
    };

    return this._http.post('/rest/feedback/save', { body });
  };

}
