import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboraPage } from './colabora.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboraPageRoutingModule {}
