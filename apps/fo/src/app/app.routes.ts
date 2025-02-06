import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SampleGuard } from './guards/sample.guard';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', canActivate: [SampleGuard], loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.routes').then(m => m.catalogRoutes) },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: NotFoundComponent }
];
