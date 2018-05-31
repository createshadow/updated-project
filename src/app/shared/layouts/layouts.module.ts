import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found.component';


const sharedComponents = [HeaderComponent, FooterComponent, NotFoundComponent, SidenavComponent];


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: sharedComponents,
  exports: sharedComponents,
  providers: [],
})
export class LayoutsModule { }
