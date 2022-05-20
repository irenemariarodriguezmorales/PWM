import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutadoptionPageRoutingModule } from './aboutadoption-routing.module';

import { AboutadoptionPage } from './aboutadoption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutadoptionPageRoutingModule
  ],
  declarations: [AboutadoptionPage]
})
export class AboutadoptionPageModule {}
