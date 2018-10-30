import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['nome']
})
export class InputPropertyComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  // @Input() nome: string;

  constructor() { }

  ngOnInit() {
  }

}
