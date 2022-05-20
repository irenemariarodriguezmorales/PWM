import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificatedanimalPageRoutingModule } from './notificatedanimal-routing.module';

import { NotificatedanimalPage } from './notificatedanimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificatedanimalPageRoutingModule
  ],
  declarations: [NotificatedanimalPage]
})
export class NotificatedanimalPageModule {}
