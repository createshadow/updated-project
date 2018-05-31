import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceComponent } from './entrance.component';
import { EntranceAdvantagesComponent } from './entrance-advantages/entrance-advantages.component';
import { EntranceOffersComponent } from './entrance-offers/entrance-offers.component';

import {OpinieModule} from '../opinie/opinie.module';



const entranceComponents = [
  EntranceComponent,
  EntranceOffersComponent,
  EntranceAdvantagesComponent
];

@NgModule({
  imports: [
    CommonModule,
    OpinieModule
  ],
  exports: [entranceComponents],
  declarations: [entranceComponents],
  providers: []
})

export class EntranceModule { }
