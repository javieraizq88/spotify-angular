import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HaederUserComponent } from './components/haeder-user/haeder-user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HaederUserComponent
  ],
  exports: [
    SideBarComponent
  ]
})
export class SharedModule { }
