import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteranimalPage } from './registeranimal.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteranimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteranimalPageRoutingModule {}
