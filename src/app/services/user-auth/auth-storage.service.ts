import { Injectable } from "@angular/core";
import { CookiesHelpersService } from "./cookies-helpers.service";

@Injectable()
export class AuthStorageService {
  constructor(
    private _coockiesHelper: CookiesHelpersService
  ) {}

  public setToken(token) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+5);
    document.cookie = `token=${token}; expires=${expireDate.toUTCString()}`;
  }

  public getToken() {
    return this._coockiesHelper.getCookie('token');
  }

  public removeToken() {
    return this._coockiesHelper.deleteCookie('token')
  }

  public getAuthHeaders() {
    return { 'Authorization': 'Bearer ' + this.getToken()} }
}
