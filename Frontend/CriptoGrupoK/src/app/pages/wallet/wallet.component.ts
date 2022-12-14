import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CryptosInterface } from 'src/app/interfaces/cryptos-interface';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { CompraServiceService } from 'src/app/services/compra-service.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponentComponent implements OnInit {
  idBilletera!:string;
  data:any;
  userCryptos: any;
  userMovements:any;
  user!:UserInterface;
  saldo!:Number;
  transactionForm:FormGroup;
  movement = {
    "id_operacion": 260,
    "desde": "",
    "hacia": "",
    "monto_de_origen": 6,
    "monto_de_destino": 3,
    "fecha": ""
  }


  constructor(private miServicioCompraService: CompraServiceService,public fb: FormBuilder,private userService: LoginService) {

    this.transactionForm = this.fb.group({
      usd:["",[Validators.required]],
      transaction:["",[Validators.required]]
    }) 

  }

  ngOnInit(): void {
    this.saldo = this.userService.usuarioAutenticado.billeteras[0].saldo;
    this.idBilletera = this.userService.usuarioAutenticado.billeteras[0].idBilleteras.toString();
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
        if(this.transactionForm.value.usd > this.saldo){
          alert("El saldo es insuficiente.")
          return
        }
        this.miServicioCompraService.retiroClient(this.idBilletera,{
          monto: usd,
          operacion: "retiro",
          idBilletera: this.idBilletera
        }).subscribe(data=>{
          this.miServicioCompraService.obtenerDataClient(this.idBilletera).subscribe(data=>{      
            this.saldo = data
            console.log(this.saldo)
          })
        })
      }
      if(transaction === "Deposito" ){
        console.log(this.idBilletera)
        this.miServicioCompraService.depositoClient(this.idBilletera,{
          monto: usd,
          operacion: "ingreso",
          idBilletera: this.idBilletera
        }).subscribe(data=>{
          this.miServicioCompraService.obtenerDataClient(this.idBilletera).subscribe(data=>{      
            this.saldo = data
            console.log(this.saldo)
          })
        })
      }
       
      // this.miServicioWallet.actualizarDataCliente(this.data).subscribe(data=>{
      //   alert("La transaccón fue realizada con exito")
      //   this.dataActualization(data)
      // })
    }
  }
 
  

}