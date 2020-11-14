import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard'; // BrowserModule no longer breaking here

// wizard
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  imports: [
    CommonModule,
    WizardRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ],
  declarations: [WizardComponent]
})
export class WizardModule { }
