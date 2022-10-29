import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
  id: string,
  name: string,
  symbol: string,
  image: string,
  current_price: number
}

@Component({
  selector: 'app-criptomoneda',
  templateUrl: './criptomoneda.component.html',
  styleUrls: ['./criptomoneda.component.css']
})
export class CriptomonedaComponent implements OnInit {

  coins: Coin[] = []
  titles: string[] = [
    'Criptomoneda',
    'precio',
  ]

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .subscribe(res => {console.log(res); this.coins = res}, err => console.log(err));
  }
}
