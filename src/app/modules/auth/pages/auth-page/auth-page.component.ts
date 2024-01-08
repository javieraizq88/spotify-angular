import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.less'
})
export class AuthPageComponent {

}
