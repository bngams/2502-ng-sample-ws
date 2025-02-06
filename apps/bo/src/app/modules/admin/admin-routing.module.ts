import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: DashbaordComponent },
  // { path: 'providers', loadChildren: .... },
  // { path: 'settings', loadComponent: SettingsComopnent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
