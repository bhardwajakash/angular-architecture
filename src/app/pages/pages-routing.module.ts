import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'home', component: HomeComponent }, { path: 'list', component: ListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
