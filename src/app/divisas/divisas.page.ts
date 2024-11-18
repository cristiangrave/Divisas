import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.page.html',
  styleUrls: ['./divisas.page.scss'],
})
export class DivisasPage implements OnInit {
  constructor() {}
  inputCantidad: number = 0;
  resultado: number = 0; /* se crea la variablde de tipo numero U objeto tambien en un futuro lo vamos a utilizar  */
  async ngOnInit() {
    console.log('esto inicia cuando renderiza');
    this.calcular();
  }
  calcular() {
    this.resultado = this.inputCantidad * 8;
    console.log('hola', this.resultado);
  }
}
