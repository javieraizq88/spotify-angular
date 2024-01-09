import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.less'
})
export class HistoryPageComponent implements OnInit {

  // cada input tiene su propio estado con valor y validacion
  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl("", [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15)
        ]),
      }
    )
  }
  constructor(  ) { }

  // captura los valores escritos en los input al hacer click en iniciar sesion
  sendLogin(): void {
    const body = this.formLogin.value
    console.log("asd", body);

  }
}
