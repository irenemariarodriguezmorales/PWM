import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleccionanimalPage } from './eleccionanimal.page';

const routes: Routes = [
  {
    path: '',
    component: EleccionanimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleccionanimalPageRoutingModule {}
