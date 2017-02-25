import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ring-chart',
  template: `
    <div class="selling-point-name">
    {{this.label}}
    </div>
    <div class="occupation-indicator" [ngClass]="{'tooltip': tooltip}" [attr.data-tip]="'value: '+value+'%'" >
      <div class="occupation-ring" *ngFor="let ring of numbers; let i = index" [ngStyle]="{'width': ring+'%','height': ring+'%','background': backgroundColor[i]}"></div>
    </div>`,
  styles: [

    `div.tooltip::before {
    content: attr(data-tip) ;   
        
    font-size: 10px;
    position:absolute;
    z-index: 999;
    white-space:nowrap;
    bottom:9999px;
    left: 50%;
    background:#00ce9f;
    color:#e0e0e0;
    padding:0px 7px;
    line-height: 24px;
    height: 24px;
    opacity: 0;  
    transition:opacity 0.4s ease-out; 
    }
        
    div.tooltip:hover::before {
        opacity: 1;
        bottom:-35px;
        border-radius: 25px;
    }

    .selling-point-name {
        padding-bottom: 0.5em;
        font-size: 0.8em;
        color: #333;
        text-align: center; 
    }

    .occupation-indicator {
        position: relative;
        margin: 1em auto 0; 
        width: 50px;
        height: 50px; 
    }

    .occupation-ring {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border: 1px solid #f89a80;
        border-radius: 100%; 
    }
    `
    ]
})
export class RingChartComponent implements OnInit {
  @Input() label: string = 'label Name';
  @Input() value: number = 0;
  @Input() step: number = 3;
  @Input() color: string = "#F13502";
  @Input() tooltip: boolean = true;
  public numbers: any;
  public backgroundColor: any;
  constructor() {
    this.backgroundColor = [];
  }

  ngOnInit() {
    this.circleCreation();
    if (this.value != 0)
      this.roundValue();
    else
      this.backgroundColor = Array(this.step).fill('none');

  }

  circleCreation() {
    this.numbers = Array(this.step).fill(Math.round(100 / this.step));
    this.numbers.map((item: number, index: number) => {
      (index) ? this.numbers[this.step - (index + 1)] = Math.round((index + 1) * 100 / this.step) : '';
    });
  }

  roundValue() {
    let delta: Array<number> = [];
    this.numbers.map((val: number, index: number) => delta[index] = Math.abs(val - this.value));
    let index = delta.indexOf(Math.min(...delta));
    for (let i = 0; i < this.step; i++) {
      if (i == index)
        this.backgroundColor[i] = this.color;
      else
        this.backgroundColor[i] = 'none';
    }
  }

}
