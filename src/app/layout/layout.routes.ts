import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';

const routes: Routes = [
  {
    path: '', component: Layout, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: () => import('../pages/main/main.module').then(module => module.MainModule) },
      { path: 'kinds', loadChildren: () => import('../pages/kind/kind.module').then(module => module.KindModule) }
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
