import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";

import { AppRoutes } from "./app.routes";

import { SharedModule} from "./shared/shared.module";

import { AppComponent } from './app.component';

import {AuthModule} from "./components/auth/auth.module";
import {MainPageModule} from "./components/main-page/main-page.module";
import {EmploymentsModule} from "./components/employments/employments.module";
import {EntranceModule} from "./components/entrance/entrance.module";
import {AcceptedModule} from "./components/accepted/accepted.module";
import {ConsolidationDeclinedTopUpModule} from "./components/consolidation-declined-top-up/consolidation-declined-top-up.module";
import {ConsolidationVerificationModule} from "./components/consolidation-verification/consolidation-verification.module";
import {ContractsModule} from "./components/contracts/contracts.module";
import {DeclinedModule} from "./components/declined/declined.module";
import {InstantorCachedModule} from "./components/instantor-cached/instantor-cached.module";
import {InstantorTransitionModule} from "./components/instantor-transition/instantor-transition.module";
import {NextProcessTaskModule} from "./components/next-process-task/next-process.task.module";
import {OpinieModule} from "./components/opinie/opinie.module";
import {PaymentMethodModule} from "./components/payment-method/payment-method.module";
import {PaymentVerificationModule} from "./components/payment-verification/payment-verification.module";
import {ProfileModule} from "./components/profile/profile.module";
import {QuestionnaireModule} from "./components/questionnaire/questionnaire.module";
import {RefinancingDeclineModule} from "./components/refinancing-decline/refinancing-decline.module";
import {ResetPasswordModule} from "./components/reset-password/reset-password.module";
import {WaitDecisionModule} from "./components/wait-decision/wait-decision.module";
import {XsellDeclineModule} from "./components/xsell-decline/xsell-decline.module";
import {InformationScreenModule} from "./components/information-screen/information-screen.module";

const componentModules = [
  MainPageModule,
  AuthModule,
  EmploymentsModule,
  EntranceModule,
  AcceptedModule,
  ConsolidationDeclinedTopUpModule,
  ConsolidationVerificationModule,
  ContractsModule,
  DeclinedModule,
  InstantorCachedModule,
  InstantorTransitionModule,
  NextProcessTaskModule,
  OpinieModule,
  PaymentMethodModule,
  PaymentVerificationModule,
  ProfileModule,
  QuestionnaireModule,
  RefinancingDeclineModule,
  ResetPasswordModule,
  WaitDecisionModule,
  XsellDeclineModule,
  InformationScreenModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AppRoutes,
    componentModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
