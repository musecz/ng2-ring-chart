import { OnInit } from '@angular/core';
export declare class RingChartComponent implements OnInit {
    label: string;
    value: number;
    step: number;
    color: string;
    tooltip: boolean;
    numbers: any;
    backgroundColor: any;
    constructor();
    ngOnInit(): void;
    circleCreation(): void;
    roundValue(): void;
}
