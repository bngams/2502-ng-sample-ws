import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'admin'
  //   loadChildren: () => import('./modules/....').then(m => m.MyModule),
  //   canActivate: [AuthGuard, AdminGuard] //
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
