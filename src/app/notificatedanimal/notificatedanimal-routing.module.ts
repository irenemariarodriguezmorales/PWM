import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificatedanimalPage } from './notificatedanimal.page';

const routes: Routes = [
  {
    path: '',
    component: NotificatedanimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificatedanimalPageRoutingModule {}
