import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerrosygatosPage } from './perrosygatos.page';

const routes: Routes = [
  {
    path: '',
    component: PerrosygatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerrosygatosPageRoutingModule {}
