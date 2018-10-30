import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementa() {
    this.valor -= 1;
    this.mudouValor.emit('Mudou o valor - Decrementou');
                    }

  incrementa() {
    this.valor += 1;
    this.mudouValor.emit('Mudou o valor - Incrementou');
  }

  onMudouValor(evento) {
    console.log(evento);
  }

}
