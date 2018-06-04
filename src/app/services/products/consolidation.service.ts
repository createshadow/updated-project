import { Injectable } from "@angular/core"

@Injectable()
export class ConsolidationService {
  constructor(
    private amount,
    private totalPaymentRequested,
    private isTopUp,
  ) {
    this.amount = amount;
    this.totalPaymentRequested = totalPaymentRequested;
    this.isTopUp = isTopUp;
  }

  private maxAmount = 2140;
  private minAmount = 260;
  private maxTotalPaymentRequested = 16000;
  private minTotalPaymentRequested = 2000;
  private totalPaymentRequestedStep = 100;
  private amountStep = 100;
  private term = 12;

  public increaseTotalPaymentRequested() {
    this.totalPaymentRequested = parseInt(this.totalPaymentRequested);
    if (this.totalPaymentRequested + this.amountStep <= this.maxTotalPaymentRequested) {
      this.totalPaymentRequested += this.amountStep;
    }
  };

  public decreaseTotalPaymentRequested() {
    this.totalPaymentRequested = parseInt(this.totalPaymentRequested);
    if (this.totalPaymentRequested - this.totalPaymentRequestedStep >= this.minTotalPaymentRequested) {
      this.totalPaymentRequested -= this.totalPaymentRequestedStep;
    }
  };

  private isValid() {
    return (this.amount >= this.minAmount) &&
      (this.amount <= this.maxAmount) ||
      (this.totalPaymentRequested >= this.minTotalPaymentRequested) &&
      (this.totalPaymentRequested <= this.maxTotalPaymentRequested);
  };

  public calculate(promo, fakePromo) {
    const TERM_MONTHS = 12;
    let BASIC_IR = 0.985;
    let coefficient = 12;
    let availableAmountCoef = 1.61;
    if (this.isTopUp) {
      coefficient = 8;
      BASIC_IR = 1.09;
      availableAmountCoef = 2.2;
    }
    if (promo.productType === 'CONSOLIDATION'){
      BASIC_IR = BASIC_IR * (1 - promo.value);
    }
    const RATE = BASIC_IR / TERM_MONTHS;
    let topUp1 = 0;
    let topUp2 = 0;
    const availableAmount = Math.round(this.amount * TERM_MONTHS / availableAmountCoef / 100) * 100;
    if (this.isTopUp) topUp1 = topUp2 = Math.round(availableAmount * 0.27 / 100) * 100;
    const paymentAmount = RATE / (Math.pow(1 + RATE, coefficient) - 1) * -(-availableAmount * Math.pow(1 + RATE, coefficient));
    let payments = [];
    const now = new Date();
    const cost = Math.round(paymentAmount) * 12 - availableAmount - topUp1 - topUp2;
    payments.push({
      amount: 0,
      promoAmount: 0,
      date: now.setDate(now.getDate() + 2),
      tranche: availableAmount
    });
    for (let i = 0; i < this.term; i++) {
      const now = new Date();
      now.setMonth(now.getMonth() + i + 1);
      const date = now.setDate(now.getDate() + 2);
      payments.push({
        amount: Math.round(paymentAmount),
        promoAmount: Math.round(paymentAmount),
        date: date,
        tranche: 0
      });
    }
    if (topUp1) payments[4].tranche = topUp1;
    if (topUp2) payments[7].tranche = topUp2;
    if (fakePromo === true) {
      payments[12].tranche = Math.round(paymentAmount);
      payments[12].amount = 0;
    }
    return {
      hasPromo: false,
      promo: promo,
      cost: cost,
      availableAmount: availableAmount,
      payments: payments,
      topUp1: topUp1,
      topUp2: topUp2
    }
  }

}
