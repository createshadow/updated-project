import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AuthComponent} from './auth.component';

export const routes: Routes = [
  {path: 'auth', component: AuthComponent }
];


export const AuthRoutes: ModuleWithProviders = RouterModule.forChild(routes);
