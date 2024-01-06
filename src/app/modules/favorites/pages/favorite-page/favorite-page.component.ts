import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [
    SharedModule,
    RouterModule
  ],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.less'
})
export class FavoritePageComponent {

}
