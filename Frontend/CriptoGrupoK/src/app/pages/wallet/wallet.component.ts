import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CryptosInterface } from 'src/app/interfaces/cryptos-interface';
import { Movimientos, UserInterface } from 'src/app/interfaces/user-interface';
import { CompraServiceService } from 'src/app/services/compra-service.service';
import { LoginService } from 'src/app/services/login.service';
import { MovementService } from 'src/app/services/movement.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponentComponent implements OnInit {
  idBilletera!:string;
  movimientos!:Array<Movimientos>;
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


  constructor(private miServicioCompraService: CompraServiceService,public fb: FormBuilder,private userService: LoginService,private movementsService: MovementService) {

    this.transactionForm = this.fb.group({
      usd:["",[Validators.required]],
      transaction:["",[Validators.required]]
    }) 

  }

  ngOnInit(): void {
    this.idBilletera = this.userService.usuarioAutenticado.billeteras[0].idBilleteras.toString();
    this.miServicioCompraService.obtenerDataClient(this.idBilletera).subscribe(data=>{      
      this.saldo = data
    })
    
    this.movementsService.traerMovimientos(this.idBilletera).subscribe(a=>this.movimientos = a)
    
    
  }

  
  
    
  
    dataActualization(data:any){
      let sessionMail = this.userService.usuarioAutenticado.mail;
      this.userMovements = this.movimientos
      this.saldo = this.saldo
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
          idBilletera: this.idBilletera,
          fecha: new Date()
        }).subscribe(data=>{
          this.miServicioCompraService.obtenerDataClient(this.idBilletera).subscribe(data=>{      
            this.saldo = data
            this.movementsService.traerMovimientos(this.idBilletera).subscribe(a=> {
              this.movimientos = a
              console.log(this.movimientos)
            })
            
          })
        })
      }
      if(transaction === "Deposito" ){
        console.log(this.idBilletera)
        this.miServicioCompraService.depositoClient(this.idBilletera,{
          monto: usd,
          operacion: "ingreso",
          idBilletera: this.idBilletera,
          fecha: new Date()
        }).subscribe(data=>{
          this.miServicioCompraService.obtenerDataClient(this.idBilletera).subscribe(data=>{      
            this.saldo = data
            this.movementsService.traerMovimientos(this.idBilletera).subscribe(a=> {
              this.movimientos = a
              console.log(this.movimientos)
            })
            
          })
        })
      }
      console.log(this.movimientos)
      
    }
    
  }
 
  

}