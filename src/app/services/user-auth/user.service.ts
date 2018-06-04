import { Inject, Injectable, Optional } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

import { EncryptionService } from "./encryption.service";
import { AuthStorageService } from "./auth-storage.service";

@Injectable()
export class UserService {
  constructor(
    private _encryption: EncryptionService,
    private _authStorage: AuthStorageService,
    private _http: HttpClient
  ) { }

  public register(newUser) {
    return this._http.post('/rest/profile/user', { newUser });
  };

  public login(user) {
    const credentials = this.encryptCredentials(user);
    return this._http.post('/rest/auth/login', { credentials });
  }

  public logout() {
    this._authStorage.removeToken();
  }

  public cpaClientLogin(phone, autoLogin: boolean) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("phone", phone);
    params.set("v", String(version));
    return this._http.post('/rest/profile/authCpaClient', { params });
  };

  public isRegistered(phoneNumber, email) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("phone", phoneNumber);
    params.set("email", email);
    params.set("v", String(version));
    return this._http.get('/rest/profile/userExists', { params });
  };

  public sendSmsVerification(phoneNumber) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("phone", phoneNumber);
    params.set("v", String(version));
    return this._http.get('/rest/profile/sendSmsVerification', { params });
  };

  public verifySmsCode(phoneNumber, code) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("phone", phoneNumber);
    params.set("code", code);
    params.set("v", String(version));
    return this._http.get('/rest/profile/smsVerification', { params });
  };

  public peselMatchPhone(phone, pesel) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("phone", phone);
    params.set("pesel", pesel);
    params.set("v", String(version));
    return this._http.get('/rest/profile/peselMatch', { params });
  };

  public getFullInfo() {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("v", String(version));
    const authHeaders = this._authStorage.getAuthHeaders();
    return this._http.get('/rest/profile/user', { params: params, headers: authHeaders });
  };

  // public isShadowClient(phone) {
  //   let version = Date.now(); // prevent caching
  //   const params = new HttpParams();
  //   params.set("phone", phone);
  //   params.set("v", String(version));
  //   return this._http.get('/rest/profile/checkShadowClient', { params }).then(function (res) {
  //     let isShadowClient = res.data.message === 'true';
  //     if (isShadowClient) {
  //       return isShadowClient;
  //     } else return crudpublic getNextTaskIdByProcessId($state.params.processId).then(result => {
  //       crudpublic getProcessVariables($state.params.processId, result.data.taskId, "shadowClient")
  //         .then(function (res) {
  //             return res.data.variables.shadowClient && res.data.variables.shadowClient.value;
  //           }
  //         );
  //
  //     })
  //   })
  // };

  public editUser(user) {
    const authHeaders = this._authStorage.getAuthHeaders();
    return this._http.put('/rest/profile/user', { user, headers: authHeaders } );
  };

  public getShadowClientInfo(cpaId) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("cpaId", cpaId);
    params.set("v", String(version));
    return this._http.get('/rest/profile/getShadowClientInformation', { params });
  };

  public getPaymentSchedule() {
    const authHeaders = this._authStorage.getAuthHeaders();
    return this._http.get('/rest/profile/paymentSchedule', { headers: authHeaders });
  };

  // public checkIfLoggedIn() {
  //   const token = this._authStorage.getToken();
  //   const isLoggedIn = token && !jwtHelper.isTokenExpired(token);
  //   // public isLoggedIn = isLoggedIn;
  //   $rootScope.isLoggedIn = isLoggedIn;
  //   return isLoggedIn;
  // };

  public getId() {
    const authHeaders = this._authStorage.getAuthHeaders();
    return this._http.get('/rest/profile/authId', { headers: authHeaders });
  };

  public getUserProductStatus(pesel) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("pesel", pesel);
    params.set("v", String(version));
    return this._http.get('/rest/profile/getProductStatus', { params });
  };

  public setCustomPassword(phone, newPassword) {
    const authHeaders = this._authStorage.getAuthHeaders();
    const params = new HttpParams();
    params.set("phone", phone);
    params.set("newPassword", this._encryption.encryptPassword(newPassword));
    return this._http.get('/rest/profile/setCustomPassword', { params: params, headers: authHeaders });
  };

  public resetPassword(user) {
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("phone", user.phone);
    params.set("code", user.code);
    params.set("newPassword", this._encryption.encryptPassword(user.newPassword));
    params.set("v", String(version));
    return this._http.get('/rest/profile/resetPassword', { params: params });
  };

  public getErrorPayment(){
    const authHeaders = this._authStorage.getAuthHeaders();
    return this._http.get('/rest/profile/checkErrorPayment', { headers: authHeaders });
  };

  public getTopupRefinanceSchedule(pesel,topUpTicket,basicIR){
    let version = Date.now(); // prevent caching
    const params = new HttpParams();
    params.set("pesel", pesel);
    params.set("topUpTicket", topUpTicket);
    params.set("basicIR", basicIR);
    params.set("v", String(version));
    return this._http.get('rest/refinancing/topUpRefinancing/schedule', { params: params });
  };

  public isBusinessKeyAvailable(businessKey){
    const params = new HttpParams();
    params.set("businessKey", businessKey);
    return this._http.get('/rest/checkBusinesskey/', { params });
  };

  public checkFinHealthProcessExist(accessCode) {
    const params = new HttpParams();
    params.set("accessCode", accessCode);
    return this._http.get('/rest/financialHealth/checkAvailableFinHealthProcess', { params });
  };

  public checkMinCounterOffer(businessKey) {
    const params = new HttpParams();
    params.set("businessKey", businessKey);
    return this._http.get('/rest/minCounterOffer/checkMinOfferByBusinessKey', { params });
  };

  public getProlongationPhone(accessCode){
    const params = new HttpParams();
    params.set("accessCode", accessCode);
    return this._http.get('/rest/prolongation/phone/', { params });
  };

  public getCrossSellPhone(accessCode){
    const params = new HttpParams();
    params.set("accessCode", accessCode);
    return this._http.get('/rest/crossSell/phone/', { params });
  };

  public getLastUserRequests(pesel) {
    const params = new HttpParams();
    params.set("pesel", pesel);
    return this._http.get('/rest/client/credits/getStatusLatestClientRequest', { params });
  };

  public getClientSpecialOffers(pesel) {
    const params = new HttpParams();
    params.set("pesel", pesel);
    return this._http.get('/rest/client/credits/getOfferForClient', { params });
  };

  public getClientXsellAccessCode(pesel) {
    const params = new HttpParams();
    params.set("pesel", pesel);
    return this._http.get('/rest/client/credits/getClientAccessCode', { params });
  };

  public checkCrossSellStatus(accessCode) {
    const params = new HttpParams();
    params.set("accessCode", accessCode);
    return this._http.get('/rest/crossSell/checkCrossSellStatus/', { params })
  };

  public checkCrossSellDebts(accessCode) {
    const params = new HttpParams();
    params.set("recredit", accessCode);
    return this._http.get('/rest/crossSell/checkCrossSellDebts/', { params })
  };

  public checkIfDealCanBeClosed() {
    const authHeaders = this._authStorage.getAuthHeaders();
    return this._http.get('/rest/profile/checkIfDealCanBeClosed', { headers: authHeaders });
  };

  public closeDeal(dealId) {
    const authHeaders = this._authStorage.getAuthHeaders();
    const params = new HttpParams();
    params.set("dealId", dealId);
    return this._http.get('rest/profile/closeDeal', { params: params, headers: authHeaders });
  };


  public killClientProcess(processInstanceId) {
    return this._http.get('/rest/client/credits/killClientProcess?processInstance='+processInstanceId)
  };

  public getAllClientApplicationsInfo(pesel) {
    return this._http.get('/rest/client/credits/getAllClientApplicationByLastDays?pesel='+pesel)
  };

  public getPreApprove(pesel) {
    const version = Date.now();
    const url = "/rest/preapproveRest/getPreapprove";
    const params = new HttpParams();
    params.set("pesel", pesel);
    params.set("v", String(version));
    return this._http.get(url, { params });
  };

  private encryptCredentials(user) {
    return {
      login: user.phone,
      encodedPassword: this._encryption.encryptPassword(user.password)
    }
  }
}

