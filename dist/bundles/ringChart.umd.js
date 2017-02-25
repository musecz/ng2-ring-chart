(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.ringchart = global.ng.ringchart || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RingChartComponent = (function () {
    function RingChartComponent() {
        this.label = 'label Name';
        this.value = 0;
        this.step = 3;
        this.color = "#F13502";
        this.tooltip = true;
        this.backgroundColor = [];
    }
    RingChartComponent.prototype.ngOnInit = function () {
        this.circleCreation();
        if (this.value != 0)
            this.roundValue();
        else
            this.backgroundColor = Array(this.step).fill('none');
    };
    RingChartComponent.prototype.circleCreation = function () {
        var _this = this;
        this.numbers = Array(this.step).fill(Math.round(100 / this.step));
        this.numbers.map(function (item, index) {
            (index) ? _this.numbers[_this.step - (index + 1)] = Math.round((index + 1) * 100 / _this.step) : '';
        });
    };
    RingChartComponent.prototype.roundValue = function () {
        var _this = this;
        var delta = [];
        this.numbers.map(function (val, index) { return delta[index] = Math.abs(val - _this.value); });
        var index = delta.indexOf(Math.min.apply(Math, delta));
        for (var i = 0; i < this.step; i++) {
            if (i == index)
                this.backgroundColor[i] = this.color;
            else
                this.backgroundColor[i] = 'none';
        }
    };
    return RingChartComponent;
}());
__decorate$1([
    _angular_core.Input()
], RingChartComponent.prototype, "label", void 0);
__decorate$1([
    _angular_core.Input()
], RingChartComponent.prototype, "value", void 0);
__decorate$1([
    _angular_core.Input()
], RingChartComponent.prototype, "step", void 0);
__decorate$1([
    _angular_core.Input()
], RingChartComponent.prototype, "color", void 0);
__decorate$1([
    _angular_core.Input()
], RingChartComponent.prototype, "tooltip", void 0);
RingChartComponent = __decorate$1([
    _angular_core.Component({
        selector: 'app-ring-chart',
        template: "\n    <div class=\"selling-point-name\">\n    {{this.label}}\n    </div>\n    <div class=\"occupation-indicator\" [ngClass]=\"{'tooltip': tooltip}\" [attr.data-tip]=\"'value: '+value+'%'\" >\n      <div class=\"occupation-ring\" *ngFor=\"let ring of numbers; let i = index\" [ngStyle]=\"{'width': ring+'%','height': ring+'%','background': backgroundColor[i]}\"></div>\n    </div>",
        styles: [
            "div.tooltip::before {\n    content: attr(data-tip) ;   \n        \n    font-size: 10px;\n    position:absolute;\n    z-index: 999;\n    white-space:nowrap;\n    bottom:9999px;\n    left: 50%;\n    background:#00ce9f;\n    color:#e0e0e0;\n    padding:0px 7px;\n    line-height: 24px;\n    height: 24px;\n    opacity: 0;  \n    transition:opacity 0.4s ease-out; \n    }\n        \n    div.tooltip:hover::before {\n        opacity: 1;\n        bottom:-35px;\n        border-radius: 25px;\n    }\n\n    .selling-point-name {\n        padding-bottom: 0.5em;\n        font-size: 0.8em;\n        color: #333;\n        text-align: center; \n    }\n\n    .occupation-indicator {\n        position: relative;\n        margin: 1em auto 0; \n        width: 50px;\n        height: 50px; \n    }\n\n    .occupation-ring {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n        -moz-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        -o-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        border: 1px solid #f89a80;\n        border-radius: 100%; \n    }\n    "
        ]
    })
], RingChartComponent);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Services */
/* Component */
/* Routing */
/* Pipe */
exports.RingChartModule = (function () {
    function RingChartModule() {
    }
    return RingChartModule;
}());
exports.RingChartModule = __decorate([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule
        ],
        declarations: [
            RingChartComponent
        ],
        exports: [
            RingChartComponent
        ]
    })
], exports.RingChartModule);

/**
 * @module
 * @description
 * Entry point for all public APIs of the ring chart package.
 */

Object.defineProperty(exports, '__esModule', { value: true });

})));
