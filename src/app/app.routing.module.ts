import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { TracksPageComponent } from './modules/tracks/pages/tracks-page/tracks-page.component';
import { NgModule } from '@angular/core';
import { AuthModule } from './modules/auth/auth.module';
import { AuthPageComponent } from './modules/auth/pages/auth-page/auth-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: "auth",
    loadChildren:() => import(`./modules/history/history.module`).then(m => m.HistoryModule)
  },
  {
    path: "",
    component: HomePageComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.
      forChild(routes),
    RouterOutlet,

  ],
  exports: [
    RouterModule,
    RouterOutlet,

  ]
})

export class AppRoutingModule {}
