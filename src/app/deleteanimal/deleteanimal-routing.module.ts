import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteanimalPage } from './deleteanimal.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteanimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteanimalPageRoutingModule {}
