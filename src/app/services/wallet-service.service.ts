import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WalletServiceService {
  constructor(private miServicioWalletService: HttpClient) {}

  obtenerDatosWallet(): Observable<any> {
    return this.miServicioWalletService.get('http://localhost:3000/data');
  }
}
