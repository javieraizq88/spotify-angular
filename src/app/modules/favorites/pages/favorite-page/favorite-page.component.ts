import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [
    RouterModule,
    PlayListBodyComponent,
  ],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.less'
})
export class FavoritePageComponent {

}
