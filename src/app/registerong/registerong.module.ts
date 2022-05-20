import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterongPageRoutingModule } from './registerong-routing.module';

import { RegisterongPage } from './registerong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterongPageRoutingModule
  ],
  declarations: [RegisterongPage]
})
export class RegisterongPageModule {}
