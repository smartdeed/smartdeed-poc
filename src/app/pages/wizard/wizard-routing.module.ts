import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './wizard.component';

const routes: Routes = [
  {
    path: '',
    component: WizardComponent,
    data: {
      breadcrumb: 'Default',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
