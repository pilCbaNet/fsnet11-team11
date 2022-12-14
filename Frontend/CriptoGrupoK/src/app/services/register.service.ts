import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url!:string;
  constructor(private miServicioRegister: HttpClient) {
      this.url = "https://localhost:7034/api/usuarios/register";
   }

   crearUsuario(postData: Object): Observable<any> {
    var resp = this.miServicioRegister.post<any>(
      this.url, postData
    );
    
    return resp;
 }  
   
   
}