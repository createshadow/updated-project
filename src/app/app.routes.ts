import { RouterModule, Routes } from "@angular/router";

import { MainPageComponent } from "./components/main-page/main-page.component";
import {AuthComponent} from "./components/auth/auth.component";
import {QuestionnaireComponent} from "./components/questionnaire/questionnaire.component";
import {ResetPasswordComponent} from "./components/reset-password/reset-password.component";
import {EmploymentsComponent} from "./components/employments/employments.component";
import {PaymentMethodComponent} from "./components/payment-method/payment-method.component";
import {ConsolidationVerificationComponent} from "./components/consolidation-verification/consolidation-verification.component";
import {DeclinedComponent} from "./components/declined/declined.component";
import {ContractsComponent} from "./components/contracts/contracts.component";
import {PaymentVerificationComponent} from "./components/payment-verification/payment-verification.component";
import {AcceptedComponent} from "./components/accepted/accepted.component";
import {NextProcessTaskComponent} from "./components/next-process-task/next-process-task.component";
import {InformationScreenComponent} from "./components/information-screen/information-screen.component";
import {InstantorTransitionComponent} from "./components/instantor-transition/instantor-transition.component";
import {InstantorCachedComponent} from "./components/instantor-cached/instantor-cached.component";
import {ConsolidationDeclinedTopUpComponent} from "./components/consolidation-declined-top-up/consolidation-declined-top-up.component";
import {RefinancingDeclineComponent} from "./components/refinancing-decline/refinancing-decline.component";
import {XsellDeclineComponent} from "./components/xsell-decline/xsell-decline.component";
import {WaitDecisionComponent} from "./components/wait-decision/wait-decision.component";
import {EntranceComponent} from "./components/entrance/entrance.component";

const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {path: 'reset-password/:processId/:taskId', component: ResetPasswordComponent},
  {path: 'employment/:processId/:taskId', component: EmploymentsComponent},
  {path: 'payment-method/:processId/:taskId', component: PaymentMethodComponent},
  {path: 'consolidation-verification/:processId/:taskId', component: ConsolidationVerificationComponent},
  {path: 'declined/:processId/:taskId', component: DeclinedComponent},
  {path: 'payment-verification/:processId/:taskId', component: PaymentVerificationComponent},
  {path: 'next-process-task/:processId/:businessKey', component: NextProcessTaskComponent},
  {path: 'contracts/:processId/:taskId', component: ContractsComponent},
  {path: 'information-screen', component: InformationScreenComponent},
  {path: 'accepted/:processId/:taskId', component: AcceptedComponent},
  {path: 'transition/:processId/:taskId', component: InstantorTransitionComponent},
  {path: 'confirmation-check/:processId/:taskId', component: InstantorCachedComponent},
  {path: 'cross-sell-debt?debts&ticket', component: InstantorCachedComponent},
  {path: 'consolidation-declined-top-up/:processId/:taskId', component: ConsolidationDeclinedTopUpComponent},
  {path: 'refinancing-decline/:processId/:taskId', component: RefinancingDeclineComponent},
  {path: 'xsell-decline/:processId/:taskId', component: XsellDeclineComponent},
  {path: 'wait-decision/:processId/:taskId', component: WaitDecisionComponent},
];

export const AppRoutes = RouterModule.forRoot(routes);

  // .state("start", {
  //   abstract: true,
  //   url: "/",
  //   controller: "StartCtrl",
  //   templateUrl: '/views/pages/start.html?v='+ v
  // })
  // .state("start.firstTask", {
  //   url: "",
  //   template: "<start></start>"
  // })
  // .state('start.finalOffer', {
  //   url: "final-offer/:processId/:taskId",
  //   template: "<refinance-offer></refinance-offer>"
  // })
  // .state('start.paydayOffer', {
  //   url: "payday-offer/:processId/:taskId",
  //   template: "<payday-offer></payday-offer>"
  // })
  // .state('start.consolidationOffer', {
  //   url: "consolidation-offer/:processId/:taskId",
  //   template: "<consolidation-offer></consolidation-offer>"
  // })
  // .state('start.minCounterOffer', {
  //   url: "payday-offer/:processId/:taskId",
  //   controller: 'MinCounterOfferCtrl'
  // })
  // .state('start.counter-offer-info', {
  //   url: "info/:processId/:taskId",
  //   templateUrl: "../../views/emb_forms/counter-offer-info.html?v=" + v,
  //   controller: "ProfileSidebarCtrl"
  // })
  // .state('start.financial-health', {
  //   url: "financial-health-offer/:processId/:taskId",
  //   template: "<financial-health-offer></financial-health-offer>"
  // })
