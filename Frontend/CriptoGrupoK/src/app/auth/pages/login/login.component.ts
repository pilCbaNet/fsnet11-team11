import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { CompraServiceService } from 'src/app/services/compra-service.service';
import {FormBuilder,Validators} from '@angular/forms';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users!:UserInterface[];
 
  loginMail!:any;
  loginPass!:any;

  constructor(private getDataService : CompraServiceService,public fb: FormBuilder,private router: Router) { }

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
      if(existentUser!==undefined){
        if(existentUser.info.password === this.loginForm.value.loginPass){
          this.router.navigate(["home"])
          return
        }
      }  
      alert("Los datos proporcionados no se correponden con ningún usuario registrado.")
    }
    catch(e){
      alert("A ocurrido un error")
    }    
    
  }

}

interface LoginData{
  mail:String;
  pass:String;
}