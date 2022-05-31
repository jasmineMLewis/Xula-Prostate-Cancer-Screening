import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProstateScreeningComponent } from './views/prostate-screening/prostate-screening.component';

const routes: Routes = [
  { path: 'prostate-screening', component: ProstateScreeningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProstateScreeningRoutingModule { }
