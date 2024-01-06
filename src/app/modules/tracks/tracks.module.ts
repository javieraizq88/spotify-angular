import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    TracksPageComponent,
  ]
})
export class TracksModule { }
