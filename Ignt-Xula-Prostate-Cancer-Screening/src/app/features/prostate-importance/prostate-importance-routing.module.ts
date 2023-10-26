import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProstateImportanceComponent } from './views/prostate-importance/prostate-importance.component';
import { ProstateImportanceTitleComponent } from './components/prostate-importance-title/prostate-importance-title.component';
import { WhatIsProstateComponent } from './components/what-is-prostate/what-is-prostate.component';
import { CommonProblemsComponent } from './components/common-problems/common-problems.component';
import { CommonProblemsHomeComponent } from './components/common-problems/common-problems-home/common-problems-home.component';
import { EnlargedProstateComponent } from './components/common-problems/enlarged-prostate/enlarged-prostate.component';

const routes: Routes = [
  { path: 'prostate-importance', component: ProstateImportanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProstateImportanceRoutingModule { }
