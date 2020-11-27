import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-numerica',
  templateUrl: './serie-numerica.component.html',
  styleUrls: ['./serie-numerica.component.css']
})
export class SerieNumericaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calcula(howMany: number, fromNum: number, toNum: number): Array<number> {
    const mySerie: Array<number> = [];
    let myNum: number;
    if (howMany > 0 && fromNum < toNum) {
      let i = 1;
      do {
        myNum = Math.floor((Math.random() * toNum) + fromNum);
        if (!mySerie.includes(myNum)) {
          mySerie.push(myNum);
          i++;
        }
      }
      while (i <= howMany);
    }
    return mySerie;
  }

}
