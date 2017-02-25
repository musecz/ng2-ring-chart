import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Services */
 
/* Component */
import { RingChartComponent } from './ring-chart.component';
 
/* Routing */
 
/* Pipe */
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RingChartComponent
    ],
    exports: [
        RingChartComponent
    ] 
})
export class RingChartModule { }