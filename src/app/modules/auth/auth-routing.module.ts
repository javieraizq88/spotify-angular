import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: "",
    component: AuthPageComponent,
    outlet: "child"
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterOutlet,
  ],
  exports: [
    RouterModule,
    RouterOutlet,
  ]
})
export class AuthRoutingModule { }
