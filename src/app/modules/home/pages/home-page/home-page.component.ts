import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '../../../../shared/components/media-player/media-player.component';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [
    RouterModule,
    SideBarComponent,
    MediaPlayerComponent,
    PlayListBodyComponent
  ],
  templateUrl: './home-page.component1.html',
  styleUrl: './home-page.component.less'
})
export class HomePageComponent {

}
