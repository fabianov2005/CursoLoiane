import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() valor = 0;

  // @Output() mudouValor = new EventEmitter();

  // @ViewChild('campoInput') campoValorInput: HTMLElement;
  @ViewChild('campoInput') campoValorInput: ElementRef;

   constructor() {
   }

  ngOnInit() {
  }

  decrementa() {
    // this.valor --;
    this.campoValorInput.nativeElement.value --;
    console.log(this.campoValorInput.nativeElement.value);
    // this.mudouValor.emit({novoValor: this.valor; });
                    }

  incrementa() {
    // this.valor ++;
    this.campoValorInput.nativeElement.value ++;
    console.log(this.campoValorInput.nativeElement.value);
    // this.mudouValor.emit({novoValor: this.valor; });
  }

  onMudouValor(evento) {
    console.log(evento);
  }

}
