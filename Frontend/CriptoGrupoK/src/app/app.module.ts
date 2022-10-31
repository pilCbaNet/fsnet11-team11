import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CompraComponent } from './pages/compra/compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CryptoListComponent } from './pages/crypto-list/crypto-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

import { VentaComponent } from './pages/venta/venta.component';
import { WalletComponentComponent } from './pages/wallet/wallet.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainComponent } from './auth/pages/main/main.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompraComponent,
    CryptoListComponent,
    AboutUsComponent,
    VentaComponent,
    WalletComponentComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
