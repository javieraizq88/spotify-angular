import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [ ReactiveFormsModule,  FormsModule, NgIf],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.less'
})
export class HistoryPageComponent implements OnInit {

  // cada input tiene su propio estado con valor y validacion
  formLogin: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl(""),
        password: new FormControl(""),
      }
    )
    console.log(this.formLogin);
  }
}
