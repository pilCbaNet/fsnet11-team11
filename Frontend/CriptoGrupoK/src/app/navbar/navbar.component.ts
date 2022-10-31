import { Component, OnInit } from '@angular/core';
import { CompraServiceService } from '../services/compra-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario!:String;

  constructor(private getUsuario:CompraServiceService) { }

  ngOnInit(): void {
    this.getUsuario.obtenerDataClient().subscribe(data=>{
      this.usuario = data.users[0].info.name;
    })
  }

}
