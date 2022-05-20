import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestrosanimalesPageRoutingModule } from './nuestrosanimales-routing.module';

import { NuestrosanimalesPage } from './nuestrosanimales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestrosanimalesPageRoutingModule
  ],
  declarations: [NuestrosanimalesPage]
})
export class NuestrosanimalesPageModule {}
