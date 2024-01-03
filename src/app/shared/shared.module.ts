import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HaederUserComponent } from './components/haeder-user/haeder-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    HaederUserComponent,
    MediaPlayerComponent
  ]
})
export class SharedModule { }
