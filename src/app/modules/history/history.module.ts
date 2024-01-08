import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { AppRoutingModule } from '../../app.routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    HistoryRoutingModule,
    HistoryPageComponent
  ]
})
export class HistoryModule { }
