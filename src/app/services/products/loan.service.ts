import { Injectable } from "@angular/core";

import Payment from "../../models/Payment";
import { PromoGradesService } from "../promo-grades.service";

@Injectable()
export class LoanService {
  constructor (
    private amount,
    private term,
    private isAnnuity,
    private isTopup,
    private _promoGrades: PromoGradesService
  ) {
    this.amount = amount;
    this.term = term;
    this.isAnnuity = isAnnuity;
    this.isTopup = isTopup;
  }

  private firstWeekWithoutRedemption = true;
  private maxAmount = 4000;
  private minAmount = 400;
  private isTopUp = true;
  private amountStep = 100;
  // private term = 12;
  private minTerm = 1;
  private maxTerm = 12;

  public increaseAmount() {
    this.amount = parseInt(this.amount);
    if (this.amount + this.amountStep <= this.maxAmount) {
      this.amount += this.amountStep;
    }
    else {
      this.amount = this.maxAmount
    }
  }

  public decreaseAmount() {
    this.amount = parseInt(this.amount);
    if (this.amount - this.amountStep >= this.minAmount) {
      this.amount -= this.amountStep;
    }
    else {
      this.amount = this.minAmount
    }
  };

  public calculate(promo) {

    const ir = this.findIr(this.amount, this.term);
    const promoIr = ir * (1 - promo.value);
    let topUp1 = 0;
    let topUp2 = 0;


    const paymentAmount = this.calculatePaymentAmount(this.amount, this.term, ir, this.isTopUp, this.isAnnuity);
    promo.paymentAmount = this.calculatePaymentAmount(this.amount, this.term, promoIr, this.isTopUp, this.isAnnuity);

    const payments: Array<Payment> = [];

    let i = 0;
    do {
      const now = new Date();
      const date = !this.isAnnuity ?
        (now.getDate() + this.term * 7 - 1) :
        (now.getDate() + i * 7 + 13);
      payments.push(
        new Payment(
          paymentAmount,
          promo.paymentAmount,
          now.setDate(date),
          this.amount
        )
      );
      if (!this.isAnnuity) break;
    } while (++i < this.term - 1);

    if (this.isTopUp) {
      const TOP_UP_1_PERCENT = 42.1 / 100;
      const TOP_UP_2_PERCENT = 83.5 / 100;
      topUp1 = this.calculateTopUp(this.amount, TOP_UP_1_PERCENT);
      topUp2 = this.calculateTopUp(this.amount, TOP_UP_2_PERCENT);
      if (topUp1) payments[2].tranche = topUp1;
      if (topUp2) payments[6].tranche = topUp2;
    }

    return {
      hasPromo: promo.value > 0,
      promo: promo,
      cost: 0,
      payments: payments,
      topUp1: topUp1,
      topUp2: topUp2
    }
  }

  public isEqualTo(product) {
    return JSON.stringify(this) === JSON.stringify(product);
  }

  private calculateTopUp(amount, percentage): number { return Math.round(amount * percentage / 10) * 10 };

  private calculatePaymentAmount(amount, term, ir, topUp, isAnnuity): number {
    ir = ir / 100;

    if (!isAnnuity) {
      return Math.round((amount * ir * 7) * term + amount);
    } else {
      return Math.round(amount * Math.pow(1 + ir * 7, 2 - 1) * ir * 7 / (1 - Math.pow(1 + ir * 7, -(topUp ? 6 : term) + 2 - 1)));
    }
  };

  private isValid() {
    return (this.amount >= this.minAmount) &&
      (this.amount <= this.maxAmount) &&
      (this.term >= this.minTerm) &&
      (this.term <= this.maxTerm)};

  private findIr(amount, term) {
    function gerIrFromGradeRow(gradeRow, amount) {
      for (let i = 0; i < gradeRow.ranges.length; i++) {
        const irGrade = gradeRow.ranges[i];

        if (amount >= irGrade.from && amount <= irGrade.to) {
          return irGrade.ir;
        }
      }
    }

    for (let j = 0; j < this._promoGrades.irGrades.length; j++) {
      const irGradeRow = this._promoGrades.irGrades[j];

      if (irGradeRow.term == term) {
        return gerIrFromGradeRow(irGradeRow, amount);
      }
    }
  };

}
