import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraServiceService {

  url!:String;
  constructor(private miServicioCompraService: HttpClient) {
      this.url = "http://localhost:3000/";
   }

   obtenerDataClient(): Observable<any> {
      return this.miServicioCompraService.get(
        this.url + "data"
      );
   }  
 
   actualizarDataCliente(postData: Object): Observable<any> {
    return this.miServicioCompraService.put(
      this.url + "data",postData
    );
 }  
}
