import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemDashboardComponent } from './item-dashboard/item-dashboard.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ItemDashboardComponent,
    StockDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
