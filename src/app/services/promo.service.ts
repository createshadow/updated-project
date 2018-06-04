import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class PromoService {
  constructor (
    private _http: HttpClient
  ) { }

  public checkPromoCode(promoCode) {
    const baseUrl = '/rest/promo/promo-code/';
    const params = new HttpParams();
    params.set("promoCode", promoCode);
    return this._http.get(baseUrl, { params });
  };

  // public getCode() {
  //   var deferred = $q.defer();
  //   var urlParams = $location.search();
  //   if (urlParams.hasOwnProperty('promo')) {
  //     var promoCode = urlParams.promo;
  //     return this.checkPromoCode(promoCode).then(function (promo) {
  //
  //       if (promo.active) {
  //         this.savePromoCode(promo);
  //
  //         return promoCode;
  //       } else localStorage.removeItem('promoCode');
  //     });
  //   }
  //   if (localStorage.getItem('promoCode')) {
  //     deferred.resolve(this.getStorageCode());
  //   } else deferred.resolve('');
  //   return deferred.promise;
  // };

  public getPromoDetails(code) {
    const promoUrl = code ? '/rest/promo/current/' + code : '/rest/promo/for-all/';
    return this._http.get(promoUrl);
  };

  // private getPromo() {
  //   return this.getCode().then(function (code) {
  //     return this.getPromoDetails(code);
  //   });
  // };

  public savePromoCode(promo) {
    var promo: any = {
      code: promo.code,
      productType: promo.productType,
      percent: promo.value,
      timestamp: new Date().getTime()
    };
    localStorage.setItem('promoCode', JSON.stringify(promo))
  };

  public clearStorageCode() {
    localStorage.removeItem('promoCode');
  };

  public getStorageCode() {
    var promo = JSON.parse(localStorage.getItem('promoCode'));
    return (this.validPromoCode(promo)) ? promo.code : '';
  };

  public getProductTypePromo() {
    var promo = JSON.parse(localStorage.getItem('promoCode'));
    return (this.validPromoCode(promo)) ? promo.productType : '';
  };

  public getSavedPromo() {
    var promo = JSON.parse(localStorage.getItem('promoCode'));
    return (this.validPromoCode(promo)) ? promo : null;
  };

  private validPromoCode(promo) {
    let promoAge: number;
    if (promo) {
      const now = new Date().getDate();
      const promoInitTime = new Date(promo.timestamp).getDate();
      let promoAge = now - promoInitTime;
    }
    if (promoAge >= 1) {
      localStorage.removeItem('promoCode');
      return false;
    }
    return true;
  }

}
