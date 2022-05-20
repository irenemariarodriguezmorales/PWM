import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminnotificationsPage } from './adminnotifications.page';

const routes: Routes = [
  {
    path: '',
    component: AdminnotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminnotificationsPageRoutingModule {}
