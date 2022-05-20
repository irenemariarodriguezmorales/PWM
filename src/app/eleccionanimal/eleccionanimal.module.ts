import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleccionanimalPageRoutingModule } from './eleccionanimal-routing.module';

import { EleccionanimalPage } from './eleccionanimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleccionanimalPageRoutingModule
  ],
  declarations: [EleccionanimalPage]
})
export class EleccionanimalPageModule {}
