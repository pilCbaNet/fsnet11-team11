import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CompraServiceService } from 'src/app/services/compra-service.service';
import { CryptosInterface } from 'src/app/interfaces/cryptos-interface';
import { UserInterface } from 'src/app/interfaces/user-interface';
import {FormBuilder,Validators} from '@angular/forms';  


declare var window: any;

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  buyButtonDisabled:boolean = true;
  cryptos! : Array<CryptosInterface>;
  user! : UserInterface;
  users! :UserInterface[];
  usd!:Number;
  postData!: PostData;
  coinName: any; 
  isSubmitted = false;
  formModal: any;
  amountToBuy:any;
  selectedCoin :SelectedCoin = {
    id: 0,
    name:"---",
    price:0,
    amount:0
  }

  constructor(private miServicioCompra: CompraServiceService, public fb: FormBuilder) {}

  coinForm = this.fb.group({
    coinName: ['',[Validators.required]],
  })
  changeCoin(e:any){
    this.coinName?.setValue(e.target.value,{
      onlySelf : true,
    });
  }
  get CoinName() {
    return this.coinForm.get('coinName');
  }

  buyForm = this.fb.group({
    amountToBuy: ['',[Validators.required]],
  })
  getAmount(e:any){
    this.amountToBuy?.setValue(e.target.value,{
      onlySelf : true,
    });
  }
  get AmountToBuy() {
    return this.buyForm.get('amountToBuy');
  }

  onBuy(){

    if(this.selectedCoin.amount==0){
      alert("no tiene suficientes fondos para realizar esa operación")
      return
    }

    this.postData = {users:this.users,crypto:this.cryptos};
    let num: Number;
    if(this.postData.users[0].wallet.crypto.find(c=>c.crypto_id == this.selectedCoin.id)!= undefined){
      num = this.postData.users[0].wallet.crypto.find(c=>c.crypto_id == this.selectedCoin.id)!.quantity
      
      if(parseFloat(JSON.stringify(num))-parseFloat(this.buyForm.value.amountToBuy!)<0){
        alert("no tiene suficientes fondos para realizar esa operación")
        return
      }
      this.postData.users[0].wallet.crypto.find(c=>c.crypto_id == this.selectedCoin.id)!.quantity = parseFloat(JSON.stringify(num))-parseFloat(this.buyForm.value.amountToBuy!)
    }
    
    this.postData.users[0].wallet.usd = parseFloat(JSON.stringify(this.postData.users[0].wallet.usd)) + parseFloat(this.buyForm.value.amountToBuy!)* parseFloat(JSON.stringify(this.selectedCoin.price))
    
    this.usd = this.user.wallet.usd;

    this.miServicioCompra.actualizarDataCliente(this.postData).subscribe(data=>console.log(data))
    this.formModal.hide();
  }

  ngOnInit(): void {
    this.miServicioCompra.obtenerDataClient().subscribe(data=>{      
      this.cryptos = data.crypto;
      this.user = data.users[0];
      this.users = data.users;
      this.usd = this.user.wallet.usd
      
    })
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('buyModal')      
    );
    
  }
  openFormModal() {
    this.formModal.show();
  }
  submit():void{    
    
    this.isSubmitted = true;
    if (!this.coinForm.valid) {
      false;
    } else {
      if(this.coinForm.value.coinName!=null){
        let num: Number = parseInt(this.coinForm.value.coinName)
        let coin: any =  this.cryptos.find(c=>c.id==num);
        let userCoin: any = this.user.wallet.crypto.find(c=>c.crypto_id==num);
        this.selectedCoin.id = num;
        this.selectedCoin.name = coin.name;
        this.selectedCoin.price = coin.price;
        this.selectedCoin.amount = userCoin.quantity;
      }
      else{
        alert("debe ingresar una opcion")
      }      
    }
    this.buyButtonDisabled = false;
  }

}
interface SelectedCoin{
  id:Number;
  name:String;
  price:Number;
  amount:Number;
}

interface PostData{
  users:Array<UserInterface>;
  crypto:Array<CryptosInterface>;
}