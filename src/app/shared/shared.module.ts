import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HaederUserComponent } from './components/haeder-user/haeder-user.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/sort.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { Directive } from '@angular/core';


@NgModule({
  declarations: [    OrderListPipe ,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardPlayerComponent,
    HaederUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
    ImgBrokenDirective

  ],
  exports: [
    CardPlayerComponent,
    HaederUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
    RouterLink,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
