import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn! : boolean
  usuario!:String;
  
  constructor(private userService : LoginService) { }

  ngOnInit(): void {
    
    this.userService.currentUser.subscribe(a => this.usuario = a.apenom);
    console.log(this.userService.loggedIn)
     
  }

  logout(){
    this.userService.cerrarSesion()
    this.usuario = "";
    console.log("hello")
  }
  

}
