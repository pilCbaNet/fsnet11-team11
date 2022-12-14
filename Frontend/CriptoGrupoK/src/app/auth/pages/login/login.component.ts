import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';  
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


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
  

  constructor(private traerUsuario : LoginService,public fb: FormBuilder,private router: Router) { }

  @ViewChild('inputMail') mail! : ElementRef;
  @ViewChild('inputPass') pass! : ElementRef;

  ngOnInit(): void {
   
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
      var data = {mail: this.LoginMail?.value,contraseña: this.LoginPass?.value}
      this.traerUsuario.traerUsuario(data).subscribe(a =>{
        console.log("userComponent ",a)               
      })
      
    this.router.navigate(["home/landing"])
                      
    }catch(error){
      let message       
      if (error instanceof Error) message = error.message
      else message = String(error)
      // we'll proceed, but let's report it
      alert({message})
    }    
    
  }

}

interface LoginData{
  mail:string;
  contraseña:string;
}