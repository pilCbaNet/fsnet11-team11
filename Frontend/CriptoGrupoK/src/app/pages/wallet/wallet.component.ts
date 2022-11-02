import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  saldo!:Number;
  transactionForm:FormGroup;
  constructor(private miServicioWallet: CompraServiceService,public fb: FormBuilder) {

    this.transactionForm = this.fb.group({
      usd:["",[Validators.required]],
      transaction:["",[Validators.required]]
    }) 

  }

  ngOnInit(): void {
    this.miServicioWallet.obtenerDataClient().subscribe((data) => {      
           
     this.dataActualization(data)
      
    });
  }
  
    
  
    dataActualization(data:any){
      let sessionMail = sessionStorage.getItem("email")
      this.data = data; 
      this.user = data.users.find((user:any) => user.info.email == sessionMail)
      this.userCryptos = this.user.wallet.crypto
      this.userMovements = this.user.movements
      this.saldo = this.user.wallet.usd
    }



get Usd(){
  return this.transactionForm.get("usd")
}

get Transaction(){
  return this.transactionForm.get("transaction")
}


  onFormSubmit(){
    const usd : any = this.transactionForm.value.usd;
    const transaction = this.transactionForm.value.transaction;

    if(this.transactionForm.invalid){
      if(this.Usd?.invalid)this.Usd.markAsTouched();
      if(this.Transaction?.invalid)this.Transaction.markAsTouched();
    }

    if(this.transactionForm.valid){
      if(transaction === "Retiro"){
        this.data.users.find((c:any)=>c.info.email === this.user.info.email).wallet.usd -= usd;
      }
      if(transaction === "Deposito" ){
        this.data.users.find((c:any)=>c.info.email === this.user.info.email).wallet.usd += usd;
      }
       
      this.miServicioWallet.actualizarDataCliente(this.data).subscribe(data=>{
        alert("La transaccón fue realizada con exito")
        this.dataActualization(data)
      })
    }
  }
 
  

}