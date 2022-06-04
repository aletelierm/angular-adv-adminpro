import { Component, Input, Output } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() titulo:string = 'Sin Titulo'

   
 @Input() doughnutChartLabels: string[] = [ 'Download Sales', 'In Store', 'Compras' ];
 @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
     
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
