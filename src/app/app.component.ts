import { Component } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CursoLoiane';

  somavalores: number;
  valorStringAtual: string;
  valor: string;

  estudostylebiding = '<div class="alert alert-success" role="alert" [style.display]="classe.value==' +
                      'alert-success' +
                      ' ? ' +
                      'block' +
                      ' :' +
                      'none' +
                      '">Selecionou a mensagem de sucesso.</div>';

  estudoclassbiding = '<h6>Tipos de Mensagem de Alerta:</h6>'+
                      '<select #classe (change) = "0">      ' +
                      '   <option value="alert-success"> Sucesso</option>' +
                      '   <option value="alert-info"> Informação</option>' +
                      '    <option value="alert-warning"> Alerta</option>' +
                      '    <option value="alert-danger"> Erro</option>' +
                      ' </select>                                     ' +

                      ' <div class="alert {{ classe.value }}" role="alert">Tipo de Mensagem Selecionada</div>' +

                      ' <div class="alert" role="alert" [class.alert-success]="classe.value==' +
                      'alert-success' +
                      '">' +
                      'Sucesso</div>' +
                      ' <div class="alert" role="alert" [class.alert-info]="classe.value=='+
                      'alert-info' +
                      '">' +
                      'Informação</div>' +
                      '<div class="alert" role="alert" [class.alert-warning]="classe.value==' +
                      'alert-warning' +
                      '>Aviso</div>' +
                      '<div class="alert" role="alert" [class.alert-danger]="classe.value==' +
                      'alert-danger' +
                      '>Perigo</div>';


  botaoclicado() {
    alert('O botão funcionou !!!');
  }

  onKeyUp(evento: KeyboardEvent) {

    this.valorStringAtual = (<HTMLInputElement>evento.target).value;
  }

  somarValor(evento: KeyboardEvent) {

    this.valor = (<HTMLInputElement>evento.target).value.toString();

    this.somavalores = this.somavalores + parseInt(this.valor, 10);

    (<HTMLInputElement>evento.target).value = '';

  }

  aumentaFonte(campoentrada: string) {
    campoentrada = campoentrada.toUpperCase();
  }

}
