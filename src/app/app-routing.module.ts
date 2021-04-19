import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AuthGuard],
    data: {
      ignore: true
    }
  },
  {
    path: 'transfer',
    loadChildren: () => import('./pages/transfer/transfer.module').then( m => m.TransferPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'inscribe',
    loadChildren: () => import('./pages/inscribe/inscribe.module').then( m => m.InscribePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'account/:number',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule),
    canActivate: [AuthGuard],
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
