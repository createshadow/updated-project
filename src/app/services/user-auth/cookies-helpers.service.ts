import { Injectable } from "@angular/core";

@Injectable()
export class CookiesHelpersService {

  public setCookie(name, value, options) {
    options = options || {};
    let expires = options.expires;

    if (typeof expires == "number" && expires) {
      const d = new Date();
      d.setTime(d.getTime() + expires);
      expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);
    let updatedCookie = `${name}=${value}`;
    for (let propName in options) {
      updatedCookie += `;${propName}`;
      let propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += `=${propValue}`;
      }
    }
    document.cookie = updatedCookie;
  }

  public getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  public deleteCookie(name) {
    this.setCookie(name, "", {
      expires: -1
    })
  }

}
