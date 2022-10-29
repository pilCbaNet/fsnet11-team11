import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

constructor() { }

ObtenerCotizaciones()
{
  return[{bitcoin:"precio"},{value:"10000"}]
}

}
