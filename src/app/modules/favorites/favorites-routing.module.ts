import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: FavoritePageComponent,
    outlet: "child"
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterOutlet
  ],
  exports: [
    RouterModule,
    RouterOutlet
  ]
})
export class FavoritesRoutingModule { }
