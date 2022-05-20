import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngcolaboradorasPageRoutingModule } from './ongcolaboradoras-routing.module';

import { OngcolaboradorasPage } from './ongcolaboradoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngcolaboradorasPageRoutingModule
  ],
  declarations: [OngcolaboradorasPage]
})
export class OngcolaboradorasPageModule {}
