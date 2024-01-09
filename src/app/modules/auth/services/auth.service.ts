import { environment } from 'src/assets/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'node:test/reporters';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
//body que la api necesita para el post
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body)
  }

  suma(a: number, b: number): number {
    return a + b
  }
}
