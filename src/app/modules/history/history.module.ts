import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPageComponent,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
