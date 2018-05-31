import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { LayoutsModule } from './layouts/layouts.module';


@NgModule({
  imports: [
    BrowserModule,
    LayoutsModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    LayoutsModule
  ],
  providers: [],
})
export class SharedModule { }
