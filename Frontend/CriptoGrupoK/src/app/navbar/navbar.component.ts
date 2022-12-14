import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario!:String;

  constructor(private userService : LoginService) { }

  ngOnInit(): void {
    
    this.usuario = this.userService.usuarioAutenticado.apenom;
     
  }

  

}
