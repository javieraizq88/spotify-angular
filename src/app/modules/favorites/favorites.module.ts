import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    FavoritePageComponent
  ]
})
export class FavoritesModule { }
