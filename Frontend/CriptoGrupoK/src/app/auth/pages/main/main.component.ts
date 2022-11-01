import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CompraServiceService } from 'src/app/services/compra-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
saldo:any;

  constructor(private router:Router,private getSaldo: CompraServiceService) { }

  @ViewChild("navegationBar",{static:false}) value! : ElementRef;

  ngOnInit(): void {
    this.getSaldo.obtenerDataClient().subscribe(data=>{
      this.saldo=data.users[0].wallet.usd;
    })

  }

  openCloseBar(){
    
    if(this.value.nativeElement.style.display != "none"){
      this.value.nativeElement.style.display = "none"
    }else{
      this.value.nativeElement.style.display = "flex"
    }  
   
  }

  navigateTo(ev :String){
    this.router.navigate([`/home/${ev}`])
  }

}
