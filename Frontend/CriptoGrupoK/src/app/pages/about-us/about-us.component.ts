import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Francisco Aguirre', photo: '/./assets/quienes-somos/fotos/FRAN.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Francisco Mauri', photo: '/./assets/quienes-somos/fotos/MAURI.jpeg', gh: 'https://github.com/franmauri47', ln: 'https://www.linkedin.com/in/francisco-m-a37898a8/', ig: 'https://www.instagram.com/fran_mauri/', cols: 1, rows: 1 },
          { title: 'Sebastian Moreno', photo: '/./assets/quienes-somos/fotos/SEBA.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Lucas Beaufils', photo: '/./assets/quienes-somos/fotos/LUCAS.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Matías McNamara', photo: '/./assets/quienes-somos/fotos/MATI.jpeg', gh: 'https://github.com/matiasmcni', ln: 'https://www.linkedin.com/in/matiasmcnamara/', ig: 'https://www.instagram.com/matiasmcni/', cols: 1, rows: 1 },
          { title: 'Facundo', photo: '/./assets/quienes-somos/fotos/MATI.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 }
        ];
      } else{
        return [
          { title: 'Francisco Aguirre', photo: '/./assets/quienes-somos/fotos/FRAN.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Francisco Mauri', photo: '/./assets/quienes-somos/fotos/MAURI.jpeg', gh: 'https://github.com/franmauri47', ln: 'https://www.linkedin.com/in/francisco-m-a37898a8/', ig: 'https://www.instagram.com/fran_mauri/', cols: 1, rows: 1 },
          { title: 'Sebastian Moreno', photo: '/./assets/quienes-somos/fotos/SEBA.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Lucas Beaufils', photo: '/./assets/quienes-somos/fotos/LUCAS.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 },
          { title: 'Matías McNamara', photo: '/./assets/quienes-somos/fotos/MATI.jpeg', gh: 'https://github.com/matiasmcni', ln: 'https://www.linkedin.com/in/matiasmcnamara/', ig: 'https://www.instagram.com/matiasmcni/', cols: 1, rows: 1 },
          { title: 'Facundo', photo: '/./assets/quienes-somos/fotos/MATI.jpeg', gh: '', ln: '', ig: '', cols: 1, rows: 1 }
        ];
      }      
    })
  );
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
