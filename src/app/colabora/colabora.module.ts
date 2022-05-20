import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaboraPageRoutingModule } from './colabora-routing.module';

import { ColaboraPage } from './colabora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboraPageRoutingModule
  ],
  declarations: [ColaboraPage]
})
export class ColaboraPageModule {}
