import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {EmploymentsComponent} from './employments.component';

export const routes: Routes = [
  {path: 'employment', component: EmploymentsComponent }
];

export const EmploymentsRoutes: ModuleWithProviders = RouterModule.forChild(routes);
