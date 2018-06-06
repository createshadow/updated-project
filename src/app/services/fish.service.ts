import {Injectable} from "@angular/core";

@Injectable()
export class FishService {

  public calculateFish(product, promo, fakePromo) {
    const fish = product.calculate(promo, fakePromo);

    fish.totalPayment = 0;
    fish.promoTotalPayment = 0;

    fish.payments.forEach(function (payment) {
      fish.totalPayment += payment.amount;
      fish.promoTotalPayment += payment.promoAmount;
    });

    if (!fish.cost) {
      fish.cost = fish.totalPayment - product.amount - fish.topUp1 - fish.topUp2;
    }

    fish.promoCost = fish.promoTotalPayment - product.amount - fish.topUp1 - fish.topUp2;

    return fish;
  }

}
