import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

    // Información que necesitampos importar desde otro componente, Estas són las variables que necesitamos rellenar con la información.
    // De otro componente, Estas variables coinciden con las de nuestro HTML de este mismo componente
    @Input() doughnutChartLabels: string[] ;
    @Input() doughnutChartData: number[] ;
    @Input() doughnutChartType: string ;

  constructor() { }

  ngOnInit() {
  }

}
