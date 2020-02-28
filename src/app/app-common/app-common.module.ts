import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { AppCommonComponent } from './app-common.component';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [AppCommonComponent, BaseComponent],
  imports: [
    CommonModule,
    AppCommonRoutingModule
  ]
})
export class AppCommonModule { }
