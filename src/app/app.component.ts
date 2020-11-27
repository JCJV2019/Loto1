import { Component, ViewChild } from '@angular/core';
import { SerieNumericaComponent } from './serie-numerica/serie-numerica.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loterias';
  myPrimiSerie: Array<number> = [];
  myPrimiSerieOrig: Array<number> = [];
  myPrimiComplementario: number;
  myPrimiReintegro: Array<number> = [];
  ///
  myEuroSerie: Array<number> = [];
  myEuroSerieOrig: Array<number> = [];
  myEuroEstrellas: Array<number> = [];
  ///
  myGordoSerie: Array<number> = [];
  myGordoSerieOrig: Array<number> = [];
  myGordoClaveSerie: Array<number> = [];
  ///
  myBonoLotoSerie: Array<number> = [];
  myBonoLotoSerieOrig: Array<number> = [];
  myBonoLotoComplementario: number;
  myBonoLotoReintegro: Array<number> = [];

  @ViewChild(SerieNumericaComponent) serie: SerieNumericaComponent;

  constructor() {
  }

  calcularPrimitiva() {
    this.myPrimiSerie = this.calcularSerie(7, 1, 49);
    this.myPrimiComplementario = this.myPrimiSerie[6];
    this.myPrimiSerie.pop();
    this.myPrimiReintegro = this.calcularSerie(1, 0, 9);
  }

  calcularEuromillones() {
    this.myEuroSerie = this.calcularSerie(5, 1, 50);
    this.myEuroEstrellas = this.calcularSerie(2, 1, 12);
  }

  calcularGordoPrimitiva() {
    this.myGordoSerie = this.calcularSerie(5, 1, 54);
    this.myGordoClaveSerie = this.calcularSerie(1, 0, 9);
  }

  calcularBonoLoto() {
    this.myBonoLotoSerie = this.calcularSerie(7, 1, 49);
    this.myBonoLotoComplementario = this.myBonoLotoSerie[6];
    this.myBonoLotoSerie.pop();
    this.myBonoLotoReintegro = this.calcularSerie(1, 0, 9);
  }

  calcularSerie(cuantos: number, desde: number, hasta: number): Array<number> {
    return this.serie.calcula(cuantos, desde, hasta);
  }

  ordenarPrimi = () => {
    this.myPrimiSerieOrig = this.myPrimiSerie.slice();
    this.myPrimiSerie = this.myPrimiSerie.sort((a, b) => a - b );
  }
  desordenarPrimi = () => {
    this.myPrimiSerie = this.myPrimiSerieOrig.slice();
  }

  ordenarEuro = () => {
    this.myEuroSerieOrig = this.myEuroSerie.slice();
    this.myEuroSerie = this.myEuroSerie.sort((a, b) => a - b );
  }
  desordenarEuro = () => {
    this.myEuroSerie = this.myEuroSerieOrig.slice();
  }

  ordenarGordo = () => {
    this.myGordoSerieOrig = this.myGordoSerie.slice();
    this.myGordoSerie = this.myGordoSerie.sort((a, b) => a - b );
  }
  desordenarGordo = () => {
    this.myGordoSerie = this.myGordoSerieOrig.slice();
  }

  ordenarBonoLoto = () => {
    this.myBonoLotoSerieOrig = this.myBonoLotoSerie.slice();
    this.myBonoLotoSerie = this.myBonoLotoSerie.sort((a, b) => a - b );
  }
  desordenarBonoLoto = () => {
    this.myBonoLotoSerie = this.myBonoLotoSerieOrig.slice();
  }

  ordenar(myFuncion) {
    myFuncion();
  }
  desordenar(myFuncion) {
    myFuncion();
  }
}
