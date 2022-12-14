import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Movimientos, Usuario } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  url!:string;
  currentUserMovements: BehaviorSubject<Array<Movimientos>>;
  currentMov: Observable<Array<Movimientos>>; 
  constructor(private miServicioLogin: HttpClient) {
      this.url = "https://localhost:7034/api/movimientos/VerMovimientos/";
      this.currentUserMovements = new BehaviorSubject<Array<Movimientos>>(JSON.parse(sessionStorage.getItem("userMovements")||"[]"));
      this.currentMov = this.currentUserMovements.asObservable();
   }

   traerMovimientos(id: string): Observable<Array<Movimientos>> {

    return this.miServicioLogin.get<Array<Movimientos>>(
      this.url + id
    ).pipe(map(data =>{
      sessionStorage.setItem("userMovements",JSON.stringify(data));
      this.currentUserMovements.next(data);
      return data
    }))
  }  
  
 

  get currentMovements(): Array<Movimientos> {
    return this.currentUserMovements.value;
  }
  
}
