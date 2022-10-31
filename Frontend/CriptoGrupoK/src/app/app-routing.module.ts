import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainComponent } from './auth/pages/main/main.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CompraComponent } from './pages/compra/compra.component';
import { CryptoListComponent } from './pages/crypto-list/crypto-list.component';
import { VentaComponent } from './pages/venta/venta.component';
import { WalletComponentComponent } from './pages/wallet/wallet.component';

const routes: Routes = [
  
  {path:"home", component:MainComponent,
children:[
  {path: 'comprar', component:CompraComponent},
  {path: 'cotizaciones', component:CryptoListComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'venta', component:VentaComponent},
  {path: 'wallet', component:WalletComponentComponent},
]},  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}, 
  {path:"", redirectTo:"login", pathMatch:'full'},
  {path:"**", redirectTo:"home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
