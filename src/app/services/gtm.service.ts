import {Injectable} from "@angular/core";
import {CrudService} from "./crud.service";
import {ActivatedRoute, Params} from "@angular/router";

@Injectable()
export class GtmService {
  constructor(
    private _crud: CrudService,
    private activatedRoute: ActivatedRoute
  ) { }

  private initialCollection = {'eventcategory' : 'process', 'currentTime': this.timeGenerator(new Date())};
  private collection = this.initialCollection;
  private localBk = null;

  public sendData(obj) {
    let params;
    this.activatedRoute.params.subscribe((params: Params) => {
      params = params;
    });

    // if there is no businessKey
    if (this.isUndefined(this.collection.businessKey) && this.isUndefined(obj.businessKey) && params.processId) {
      this._crud.getProcessBasicInfo(params).map(
        res => {
          obj.businessKey = res.businessKey;
          this.assignCollection(obj);
        },
        err => {
          this.assignCollection(obj)
        });
    } else {
      this.assignCollection(obj);
    }
  };

  private assignCollection(obj) {
    if (this.collection.businessKey === obj.businessKey || this.isUndefined(obj.businessKey)) {
      if (this.collection.pesel && obj.pesel === null) {
        obj.pesel = this.collection.pesel;
      }
      this.collection = Object.assign(this.collection, obj);
    } else {
      this.collection = Object.assign(this.initialCollection, obj);
    }
    // dataLayer.push(this.collection);
  }

  private isUndefined(value) {
    return typeof value === 'undefined';
  }

  private PRODUCTS = Object.freeze({
    Consolidation: "consolidation",
    Annuity: "annuity",
    AnnuityTopup: "annuity-topup",
    Balloon: "balloon"
  });

  private getProductName(isConsolidation, term) {
    if (isConsolidation) {
      return this.PRODUCTS.Consolidation;
    } else {
      if (term > 4) {
        if (term > 8) {
          return this.PRODUCTS.AnnuityTopup;
        }
        return this.PRODUCTS.Annuity;
      }
      return this.PRODUCTS.Balloon;
    }
  };

  private timeGenerator(date) {
    return `${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds()}`;
  }

}
