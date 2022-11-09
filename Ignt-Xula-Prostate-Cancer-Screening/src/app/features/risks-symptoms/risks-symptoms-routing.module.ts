import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RisksSymptomsComponent } from './views/risks-symptoms/risks-symptoms.component';

const routes: Routes = [
  { path: 'risks-symptoms', component: RisksSymptomsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisksSymptomsRoutingModule { }
