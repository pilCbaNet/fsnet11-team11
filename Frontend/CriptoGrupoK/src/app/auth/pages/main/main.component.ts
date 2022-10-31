import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.getSaldo.obtenerDataClient().subscribe(data=>{
      this.saldo=data.users[0].wallet.usd;
    })
  }

  navigateTo(ev :String){
    this.router.navigate([`/home/${ev}`])
  }

}
