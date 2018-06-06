import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class CamundaRoutingService {
  constructor(
    private router: Router
  ) { }

  public changeRoute(state?) {
    switch (state.formKey) {
      case "start.firstTask":
        this.router.navigateByUrl("");
        break;
      case "start.employment":
        this.router.navigateByUrl("/employment");
        break;
      case "start.paymentMethod":
        this.router.navigateByUrl("/payment-method");
        break;
      case "start.consolidationVerification":
        this.router.navigateByUrl("/consolidation-verification");
        break;
      case "start.declined":
        this.router.navigateByUrl("/declined");
        break;
      case "start.refinancingDecline":
        this.router.navigateByUrl("/refinancing-decline");
        break;
      case "start.confirmationCheck":
        this.router.navigateByUrl("/confirmation-check");
        break;
      case "start.nextProcessTask":
        this.router.navigateByUrl("/next-process-task");
        break;
      case "start.informationScreen":
        this.router.navigateByUrl("/information-screen");
        break;
      case "start.crossSellDebts":
        this.router.navigateByUrl("/cross-sell-debt");
        break;
      case "start.contracts":
        this.router.navigateByUrl("/contracts");
        break;
      case "start.accepted":
        this.router.navigateByUrl("/accepted");
        break;
      case "start.paymentVerification":
        this.router.navigateByUrl("/payment-verification");
        break;
      case "start.inst-transition":
        this.router.navigateByUrl("/transition");
        break;
      case "start.xsellDecline":
        this.router.navigateByUrl("/xsell-decline");
        break;
      case "start.wait-decision":
        this.router.navigateByUrl("/wait-decision");
        break;
      case "declineBecauseOfTopUp":
        this.router.navigateByUrl("/consolidation-declined-top-up");
        break;
      default:
        this.router.navigateByUrl("");
        break;
    }
  }

}
