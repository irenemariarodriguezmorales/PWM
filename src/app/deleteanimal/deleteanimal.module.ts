import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteanimalPageRoutingModule } from './deleteanimal-routing.module';

import { DeleteanimalPage } from './deleteanimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteanimalPageRoutingModule
  ],
  declarations: [DeleteanimalPage]
})
export class DeleteanimalPageModule {}
