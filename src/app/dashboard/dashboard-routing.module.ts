import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ItemDashboardComponent } from './item-dashboard/item-dashboard.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      routeKey: 'dashboard-module-root'
    },
    children: [
      {
        path: 'item',
        component: ItemDashboardComponent,
        outlet: 'subtab',
        data: {
          routeKey: 'dashboard-module-item'
        },
      },
      {
        path: 'stock',
        component: StockDashboardComponent,
        outlet: 'subtab',
        data: {
          routeKey: 'dashboard-module-stock'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
