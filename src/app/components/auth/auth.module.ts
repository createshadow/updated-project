import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthComponent} from './auth.component';

import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
  ],
  exports: [],
  declarations: [AuthComponent],
  providers: []
})

export class AuthModule { }
