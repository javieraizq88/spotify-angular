import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HaederUserComponent } from './components/haeder-user/haeder-user.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardPlayerComponent,
    HaederUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
  ],
  exports: [
    CardPlayerComponent,
    HaederUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
  ]
})
export class SharedModule { }
