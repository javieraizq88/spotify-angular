import { Component } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from '@shared/shared.module';
import { TracksModule } from '@modules/tracks/tracks.module';
import { HistoryModule } from '@modules/history/history.module';
import { AuthModule } from '@modules/auth/auth.module';
import { FavoritesPageModule } from '@modules/favorites/favorites-page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgForOf,
    AuthModule,
    FavoritesPageModule,
    HistoryModule,
    HomeModule,
    TracksModule,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'spotify';
}
