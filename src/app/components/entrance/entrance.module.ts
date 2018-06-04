import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceComponent } from './entrance.component';
import { EntranceAdvantagesComponent } from './entrance-advantages/entrance-advantages.component';
import { EntranceOffersComponent } from './entrance-offers/entrance-offers.component';

import {OpinieModule} from '../opinie/opinie.module';

@NgModule({
  declarations: [
    EntranceComponent,
    EntranceOffersComponent,
    EntranceAdvantagesComponent
  ],
  imports: [
    CommonModule,
    OpinieModule
  ],
  exports: [
    OpinieModule,
  ],
  providers: []
})

export class EntranceModule { }
