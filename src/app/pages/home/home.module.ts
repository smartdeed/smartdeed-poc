import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule as HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
