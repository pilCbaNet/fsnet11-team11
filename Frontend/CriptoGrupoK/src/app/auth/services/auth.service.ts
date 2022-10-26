import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  registro( email: string, password: string ) {

  }

  login( email: string, password: string ) {
  }

  logout() {
    localStorage.clear();
  }
}
