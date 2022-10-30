import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CompraComponent } from './pages/compra/compra.component';
import { CryptoListComponent } from './pages/crypto-list/crypto-list.component';
import { VentaComponent } from './pages/venta/venta.component';
import { WalletComponentComponent } from './pages/wallet/wallet.component';


const routes: Routes = [
  {path: 'comprar', component:CompraComponent},
  {path: 'show-crypto', component:CryptoListComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'venta', component:VentaComponent},
  {path: 'wallet', component:WalletComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
