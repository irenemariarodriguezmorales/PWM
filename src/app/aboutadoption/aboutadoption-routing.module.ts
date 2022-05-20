import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutadoptionPage } from './aboutadoption.page';

const routes: Routes = [
  {
    path: '',
    component: AboutadoptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutadoptionPageRoutingModule {}
