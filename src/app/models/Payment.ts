export default class Payment {
  constructor (public amount: number, public promoAmount: number, public date: any, public tranche: number) {
    this.amount = amount || 0;
    this.promoAmount = promoAmount || 0;
    this.date = date || new Date();
    this.tranche = tranche || 0;
  }
}
