import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    TracksPageComponent,
    ImgBrokenDirective
  ],
  exports: [
    ImgBrokenDirective
  ]
})
export class TracksModule { }
