import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { CompraServiceService } from 'src/app/services/compra-service.service';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';  
import { Router } from '@angular/router';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users!:UserInterface[];
 
  loginMail!:any;
  loginPass!:any;
  form:any;
  

  constructor(private getDataService : CompraServiceService,public fb: FormBuilder,private router: Router) { }

  @ViewChild('inputMail') mail! : ElementRef;
  @ViewChild('inputPass') pass! : ElementRef;

  ngOnInit(): void {
    this.getDataService.obtenerDataClient().subscribe(data=>{
      this.users = data.users;      
    })
  }

  //form builder
  loginForm = this.fb.group({
    loginMail: ["",[Validators.required]],
    loginPass: ["",[Validators.required]],
  })
  changeMail(e:any){
    this.loginMail?.setValue(e.target.value,{
      onlySelf : true,
    });
  }
  changePass(e:any){
    this.loginPass?.setValue(e.target.value,{
      onlySelf : true,
    });
  }
  get LoginMail() {
    return this.loginForm.get('loginMail');
  }
  get LoginPass() {
    return this.loginForm.get('loginPass');
  }

  submit(){
    try{
      let existentUser = this.users.find(c=>c.info.email === this.loginForm.value.loginMail)
      
      if(existentUser!=undefined){
        if(existentUser.info.password === this.loginForm.value.loginPass){
          this.router.navigate(["home/landing"])
          sessionStorage.setItem('email',existentUser.info.email.toString())
          return
        }else{
          alert("La contraseña ingresada es incorrecta.")
        }        
      }else{
        alert("La dirección de correo ingresada no esta registrada.")
      }     
      
      
      
    }
    catch(e){
      
      alert("Los datos proporcionados no se corresponden con ningún usuario registrado.")
    }    
    
  }

}

interface LoginData{
  mail:String;
  pass:String;
}