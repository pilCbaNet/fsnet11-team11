import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { CryptosInterface } from 'src/app/interfaces/cryptos-interface'
import { CompraServiceService } from 'src/app/services/compra-service.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';  
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
  loginForm!:FormGroup;
  validPass:Boolean = true;


  constructor(private agregarCliente : CompraServiceService,public fb: FormBuilder,private router: Router) { 
    this.loginForm = this.fb.group({
      loginName: ["",[Validators.required]],
      loginDate: ["",[Validators.required]],
      loginMail: ["",[Validators.required,Validators.email]],
      loginPass: ["",[Validators.required,Validators.minLength(8)]],
      loginRPass: ["",[Validators.required]],
    },{
      validator: ConfirmedValidator("loginPass","loginRPass","loginDate")     
    }
    
    )

  }

  ngOnInit(): void { 
    this.agregarCliente.obtenerDataClient().subscribe(data =>{ 
      this.users = data.users;
      this.crypto = data.crypto;
    });  
  }

  
 
  get LoginName() {
    return this.loginForm.get('loginName');
  }
  get LoginDate() {
    return this.loginForm.get('loginDate');
  }
  get LoginMail() {
    return this.loginForm.get('loginMail');
  }
  get LoginPass() {
    return this.loginForm.get('loginPass');
  }
  get LoginRPass() {
    return this.loginForm.get('loginRPass');
  }

  get ValidPass(){
    
    return this.LoginRPass?.touched && this.LoginRPass?.invalid;
  }
  
//  ageCheck(){
//   let years = new Date(this.LoginDate?.value+":00:00:00")
//   let now = new Date()
  
  
//   if( years.getFullYear() - now.getFullYear() <18){
//     this.LoginDate?.setErrors({ minor: true });
//     this.LoginDate?.markAsTouched();
//   }
//  }

  submit(){

    
    
    if(!this.loginForm.valid){
      if(this.LoginName?.invalid)this.LoginName.markAsTouched();
      if(this.LoginDate?.invalid)this.LoginDate.markAsTouched();
      if(this.LoginMail?.invalid)this.LoginMail.markAsTouched();
      if(this.LoginPass?.invalid)this.LoginPass.markAsTouched();
      if(this.LoginRPass?.invalid)this.LoginRPass.markAsTouched();
    }

    

    if(this.loginForm.valid){
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

function ConfirmedValidator(controlName: string, matchingControlName: string,date:string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      const dateControl = formGroup.controls[date]
      let years = new Date(dateControl.value).getFullYear()
      let now = new Date().getFullYear()
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
      console.log(now-years<18)
      if(now-years<18){
        dateControl.setErrors({ ageValidator: true });
      }else {
        dateControl.setErrors(null);
    }
  }
}

// function AgeValidator(controlName: string){
//   return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       let years = new Date(control.value).getFullYear()
//       console.log(years)     
//       if ( years < 18) {
//           control.setErrors({ ageValidator: true });
//       } else {
//           control.setErrors(null);
//       }
//   }
// }

function dateDiffInDays(a:any, b:any) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}