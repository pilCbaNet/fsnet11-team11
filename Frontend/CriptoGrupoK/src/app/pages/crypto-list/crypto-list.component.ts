import { Component, OnInit } from '@angular/core';
import { CompraServiceService } from 'src/app/services/compra-service.service';
import { CryptosInterface } from 'src/app/interfaces/cryptos-interface';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  cryptos! : Array<CryptosInterface>;

  constructor(private miServicioCompra: CompraServiceService) { }

  ngOnInit(): void {

    // this.miServicioCompra.obtenerDataClient().subscribe(data=>{      
    //   this.cryptos = data.crypto;     
      
    // })
  }

}
