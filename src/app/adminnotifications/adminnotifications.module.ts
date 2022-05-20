import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminnotificationsPageRoutingModule } from './adminnotifications-routing.module';

import { AdminnotificationsPage } from './adminnotifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminnotificationsPageRoutingModule
  ],
  declarations: [AdminnotificationsPage]
})
export class AdminnotificationsPageModule {}
