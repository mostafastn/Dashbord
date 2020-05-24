import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLTERoutingModule } from './admin-lte-routing.module';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppsettingComponent } from './appsetting/appsetting.component';

@NgModule({
  declarations: [
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent
  ],
  imports: [
    CommonModule,
    AdminLTERoutingModule
  ]
})
export class AdminLTEModule { }
