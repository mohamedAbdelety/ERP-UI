import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

export const ROUTES: Routes = [{
  path: '', redirectTo: 'app', pathMatch: 'full'
},
{
  path: 'app', canActivate: [AuthGuard], loadChildren: () => import('./layout/layout.module').then(module => module.LayoutModule)
},
{
  path: 'login', canActivate: [LoginGuard], loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)
},
{
  path: 'error', component: ErrorComponent
},
{
  path: '**', component: ErrorComponent
}
];
