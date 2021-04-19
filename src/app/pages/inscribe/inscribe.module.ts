import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscribePageRoutingModule } from './inscribe-routing.module';

import { InscribePage } from './inscribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InscribePageRoutingModule
  ],
  declarations: [InscribePage]
})
export class InscribePageModule {}
