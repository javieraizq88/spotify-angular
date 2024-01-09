import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    TracksPageComponent,
    ImgBrokenDirective,
    HttpClientModule
  ],
  exports: [
    ImgBrokenDirective
  ]
})
export class TracksModule { }
