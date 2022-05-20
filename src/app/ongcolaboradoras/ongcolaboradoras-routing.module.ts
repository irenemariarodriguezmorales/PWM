import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngcolaboradorasPage } from './ongcolaboradoras.page';

const routes: Routes = [
  {
    path: '',
    component: OngcolaboradorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngcolaboradorasPageRoutingModule {}
