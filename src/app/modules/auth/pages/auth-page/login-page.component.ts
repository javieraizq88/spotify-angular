import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  errorSession: boolean = false
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup(
      {
        email: new UntypedFormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new UntypedFormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      .subscribe(responseOk => { // TODO: 200 a 400: cuando el usuario ingresa las ceredenciales correctas
        console.log("sesion iniciada correctamente");
      },
        err => { // TODO: errores > 400
          this.errorSession = true
          console.log("error en mail o contraseña");
        })
  }

}
