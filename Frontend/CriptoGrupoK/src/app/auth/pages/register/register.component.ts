import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { CryptosInterface } from 'src/app/interfaces/cryptos-interface'
import { CompraServiceService } from 'src/app/services/compra-service.service';
import {FormBuilder,Validators} from '@angular/forms';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user!:UserInterface;
  users!:UserInterface[];
  crypto!:CryptosInterface;
  loginMail!:any;
  loginPass!:any;

  constructor(private agregarCliente : CompraServiceService,public fb: FormBuilder,private router: Router) { }

  ngOnInit(): void { 
    this.agregarCliente.obtenerDataClient().subscribe(data =>{ 
      this.users = data.users;
      this.crypto = data.crypto;
    });  
  }

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
    
    if(this.loginForm.value.loginMail==undefined||this.loginForm.value.loginPass == undefined ){
      alert("debe ingresar un mail y una contraseña para proseguir")
      return
    }
    if(!this.loginForm.value.loginMail.includes("@") ){
      alert("debe ingresar un mail valido y una contraseña de al menos 8 digitos para proseguir")
      return
    }
    if(this.loginForm.value.loginPass.length < 8 ){
      alert("debe ingresar un mail valido y una contraseña de al menos 8 digitos para proseguir")
      return
    }

    let newUser = deepCopy(this.users[0])
    newUser.info.email = this.loginForm.value.loginMail!
    newUser.info.password = this.loginForm.value.loginPass!
    this.users.push(newUser)

    let newData = {users:this.users,crypto:this.crypto}
    
    this.agregarCliente.actualizarDataCliente(newData).subscribe(data=>{
    this.router.navigate(["login"])     
    })
  }

}

function deepCopy<T>(instance : T) : T {
  if ( instance == null){
      return instance;
  }

  // handle Dates
  if (instance instanceof Date) {
      return new Date(instance.getTime()) as any;
  }

  // handle Array types
  if (instance instanceof Array){
      var cloneArr = [] as any[];
      (instance as any[]).forEach((value)  => {cloneArr.push(value)});
      // for nested objects
      return cloneArr.map((value: any) => deepCopy<any>(value)) as any;
  }
  // handle objects
  if (instance instanceof Object) {
      var copyInstance = { ...(instance as { [key: string]: any }
      ) } as { [key: string]: any };
      for (var attr in instance) {
          if ( (instance as Object).hasOwnProperty(attr)) 
              copyInstance[attr] = deepCopy<any>(instance[attr]);
      }
      return copyInstance as T;
  }
  // handling primitive data types
  return instance;
}