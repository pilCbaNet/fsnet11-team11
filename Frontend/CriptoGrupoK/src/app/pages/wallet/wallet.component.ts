import { Component, OnInit } from '@angular/core';
import { CryptosInterface } from 'src/app/interfaces/cryptos-interface';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { CompraServiceService } from 'src/app/services/compra-service.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponentComponent implements OnInit {
  data:any;
  userCryptos: any;
  userMovements:any;
  user!:UserInterface;

  constructor(private miServicioWallet: CompraServiceService) {}

  ngOnInit(): void {
    this.miServicioWallet.obtenerDataClient().subscribe((data) => {
      
      this.data = data;      
      let sessionMail = sessionStorage.getItem("email")
      this.user = data.users.find((user:any) => user.info.email == sessionMail)
      this.userCryptos = this.user.wallet.crypto
      this.userMovements = this.user.movements
    });
  }


  

}