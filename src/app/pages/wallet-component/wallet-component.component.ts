import { Component, OnInit } from '@angular/core';
import { WalletServiceService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-wallet-component',
  templateUrl: './wallet-component.component.html',
  styleUrls: ['./wallet-component.component.css'],
})
export class WalletComponentComponent implements OnInit {
  data: any;
  titlesMovements: string[] = [
    'Id Operación',
    'Desde',
    'Hacia',
    'Monto en USD',
    'Cantidad en Crypto de Origen',
    'Cantidad en Crypto de Destino',
  ];

  titlesWallet: string[] = [
    'Crypto',
    'Cantidad en Moneda Cripto',
    'Cantidad en USD',
  ];

  constructor(private miServicioWallet: WalletServiceService) {}

  ngOnInit(): void {
    this.miServicioWallet.obtenerDatosWallet().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
