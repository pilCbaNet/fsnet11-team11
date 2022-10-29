import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptomonedaComponent } from './pages/criptomoneda/criptomoneda.component';

const routes: Routes = [
   {path: 'criptomoneda', component: CriptomonedaComponent}
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
