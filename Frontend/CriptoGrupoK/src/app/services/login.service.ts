import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../interfaces/user-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url!:string;
  loggedIn = new BehaviorSubject<boolean>(false)
  currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>; 

  constructor(private miServicioLogin: HttpClient,private router: Router) {
      this.url = "https://localhost:7034/api/usuarios";
      this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(sessionStorage.getItem("currentUser")||"{}"));
      this.currentUser = this.currentUserSubject.asObservable();
   }

   traerUsuario(postData: Object): Observable<Usuario> {

    return this.miServicioLogin.post<Usuario>(
      this.url, postData
    ).pipe(map(data =>{
      sessionStorage.setItem("currentUser",JSON.stringify(data));
      this.currentUserSubject.next(data);
      this.loggedIn.next(true)
      return data
    }))
  }  
  
  cerrarSesion():void{
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("userMovements");
    this.loggedIn.next(false)
    this.router.navigate([""])
  }

  get usuarioAutenticado(): Usuario {
    return this.currentUserSubject.value;
  }
  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
    }
   
}

