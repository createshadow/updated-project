import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";

import {AppRoutes} from "./app.routes";

import { SharedModule} from "./shared/shared.module";

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
