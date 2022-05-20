import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestrosanimalesPage } from './nuestrosanimales.page';

const routes: Routes = [
  {
    path: '',
    component: NuestrosanimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestrosanimalesPageRoutingModule {}
