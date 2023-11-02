import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProstateImportanceComponent } from './views/prostate-importance/prostate-importance.component';

const routes: Routes = [
  { path: 'prostate-importance', component: ProstateImportanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProstateImportanceRoutingModule { }
