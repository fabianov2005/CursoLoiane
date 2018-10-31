import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked {

  // tslint:disable-next-line:no-inferrable-types
  @Input() valorInicial: number = 10;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.exibirlog('ngOnChanges');
  }

  ngOnChecked() {
    this.exibirlog('ngOnChecked');
  }

  ngAfterContentInit(): void {
    this.exibirlog('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
      this.exibirlog('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.exibirlog('ngAfterViewChecked');
  }

  exibirlog(ciclo: string) {
    console.log(ciclo);
  }
}
