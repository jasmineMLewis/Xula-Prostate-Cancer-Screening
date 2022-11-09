import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestChoiceComponent } from './views/best-choice/best-choice.component';

const routes: Routes = [
  { path: 'best-choice', component: BestChoiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestChoiceRoutingModule { }
