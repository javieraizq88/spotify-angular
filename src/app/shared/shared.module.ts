import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HaederUserComponent } from './components/haeder-user/haeder-user.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HaederUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HaederUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
  ]
})
export class SharedModule { }
