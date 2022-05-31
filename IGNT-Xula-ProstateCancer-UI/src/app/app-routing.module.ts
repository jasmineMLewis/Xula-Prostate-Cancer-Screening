import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'prostate-importance', 
    loadChildren: () => import('./features/prostate-importance/prostate-importance.module').then(m => m.ProstateImportanceModule) 
  },
  { 
    path: 'risks-symptoms', 
    loadChildren: () => import('./features/risks-symptoms/risks-symptoms.module').then(m => m.RisksSymptomsModule) 
  },
  {
    path: 'prostate-screening',
    loadChildren: () => import('./features/prostate-screening/prostate-screening.module').then(m => m.ProstateScreeningModule)
  },
  {
    path: 'diagnosis-treatment',
    loadChildren: () => import('./features/diagnosis-treatment/diagnosis-treatment.module').then(m => m.DiagnosisTreatmentModule)
  },
  {
    path: 'best-choice',
    loadChildren: () => import('./features/best-choice/best-choice.module').then(m => m.BestChoiceModule)
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
