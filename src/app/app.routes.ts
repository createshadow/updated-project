import { RouterModule, Routes } from "@angular/router";

import { MainPageComponent } from "./components/main-page/main-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'}
];

export const AppRoutes = RouterModule.forRoot(routes);
