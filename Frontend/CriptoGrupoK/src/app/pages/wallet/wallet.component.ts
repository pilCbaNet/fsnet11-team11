import { Component, OnInit } from '@angular/core';
import { CompraServiceService } from 'src/app/services/compra-service.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
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

  constructor(private miServicioWallet: CompraServiceService) {}

  ngOnInit(): void {
    this.miServicioWallet.obtenerDataClient().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}