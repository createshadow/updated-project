import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {EmploymentsComponent} from './employments.component';
import {EmploymentsRoutes} from './employments.routing';



@NgModule({
  imports: [
    CommonModule,
    EmploymentsRoutes
  ],
  declarations: [EmploymentsComponent],
  providers: []
})

export class EmploymentsModule { }
