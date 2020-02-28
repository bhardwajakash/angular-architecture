import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCommonComponent } from './app-common.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [{ path: '', component: AppCommonComponent }, { path: 'base', component: BaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCommonRoutingModule { }
