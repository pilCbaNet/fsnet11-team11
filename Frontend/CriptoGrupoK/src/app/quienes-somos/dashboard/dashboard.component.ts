import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],  
})

export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Francisco', photo: '', gh:'', ln:'', ig:'',cols: 2, rows: 1 },
          { title: 'Francisco Mauri', photo: './assets/quienes-somos/fotos/Fran.jpeg', gh: 'https://github.com/franmauri47', ln: 'https://www.linkedin.com/in/francisco-m-a37898a8/', ig: 'https://www.instagram.com/fran_mauri/', cols: 2, rows: 1 },
          { title: 'Sebastian', photo: '', gh: '', ln: '', ig: '', cols: 2, rows: 1 },
          { title: 'Lucas', photo: '', gh: '', ln: '', ig: '', cols: 2, rows: 1 },
          { title: 'Mati', photo: '', gh: '', ln: '', ig: '', cols: 2, rows: 1 }
        ];
      } else{
        return [
          { title: 'Francisco', photo: '', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Francisco Mauri', photo: './assets/quienes-somos/fotos/Fran.jpeg', gh: 'https://github.com/franmauri47', ln: 'https://www.linkedin.com/in/francisco-m-a37898a8/', ig: 'https://www.instagram.com/fran_mauri/', cols: 1, rows: 1 },
          { title: 'Sebastian', photo: '', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Lucas', photo: '', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Mati', photo: '', gh: '', ln: '', ig: '', cols: 1, rows: 1 }
        ];
      }      
    })
  );
  
  constructor(private breakpointObserver: BreakpointObserver) {  }

  
}


