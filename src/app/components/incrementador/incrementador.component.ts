import { Component, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progreso: number = 10;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  /*
  get getPorcentaje(){

    return `${ this.progreso }%`;
  
  }*/

  //Metodo para cambiar valor de la barra de progreso
  cambiarValor( valor:number ){
    if(this.progreso >=100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
      
    }

    if (this.progreso <=0 && valor < 0){
      this.valorSalida.emit(0);
      this.progreso = 0;

      return;
    }

    this.valorSalida.emit( this.progreso);
    this.progreso = this.progreso + valor;

  }

}
