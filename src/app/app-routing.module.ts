import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }, { path: 'common', loadChildren: () => import('./app-common/app-common.module').then(m => m.AppCommonModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
