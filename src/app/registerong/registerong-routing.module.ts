import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterongPage } from './registerong.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterongPageRoutingModule {}
