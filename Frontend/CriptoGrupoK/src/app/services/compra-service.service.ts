import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraServiceService {

  url!:String;
  
  constructor(private miServicioCompraService: HttpClient) {
      this.url = "https://localhost:7034/api/billetera/";     
   }

   obtenerDataClient(id:string): Observable<any> {
    
    return this.miServicioCompraService.get(
      this.url + id
    );
 }  
 
 depositoClient(id:string,data:any): Observable<any> {
    
  return this.miServicioCompraService.put(
    this.url + id, data
  );
}  

retiroClient(id:string,data:any): Observable<any> {
    
  return this.miServicioCompraService.put(
    this.url + id, data
  );
}  
   
}
