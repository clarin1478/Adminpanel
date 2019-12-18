import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

   // VARIABLES

   // View

   @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;

   // Inputs

   @Input() leyenda: string = 'Leyenda';
   @Input() porcentaje: number = 50;

   // Outputs

   @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
      console.log('Leyenda: ', this.leyenda);
      console.log('Porcentaje: ', this.porcentaje);
  }

  ngOnInit() {
  }

  Cambiar( newValue: number) {
    console.log( newValue );

    if (newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
        this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor( xValor: number ) {

    if (this.porcentaje >= 100 && xValor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && xValor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje += xValor;

    this.cambioValor.emit(this.porcentaje);

    console.log(this.porcentaje);

    this.txtProgress.nativeElement.value.focus();

  }

}
