import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerrosygatosPageRoutingModule } from './perrosygatos-routing.module';

import { PerrosygatosPage } from './perrosygatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerrosygatosPageRoutingModule
  ],
  declarations: [PerrosygatosPage]
})
export class PerrosygatosPageModule {}
