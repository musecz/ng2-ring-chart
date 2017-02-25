# Async local storage for Angular

Simple module to create ring chart with the possibility to define step.

## Getting started

Install via [npm](http://npmjs.com) :

```
npm install ng2-ring-chart --save
```

Then include the RingChart module in your app module.

```
import { RingChartModule } from 'ng2-ring-chart';

@NgModule({
  imports: [
    BrowserModule,
    RingChartModule,
    ...
  ]
  ...
})
export class AppModule {}
```

Now you just have to use the component where you need it :

```
  <app-ring-chart [label]="'label name'" [value]="58"></app-ring-chart>

```

If you use [System.js](https://github.com/systemjs/systemjs) loading in developpement, 
configure the module path like for other Angular modules :

```
System.config({
    ...
    map: {
      '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
      ...
      'ng-ring-chart': 'node_modules/ng-ring-chart/bundles/ringChart.umd.js'
    }
    ...
});
```

## API

The following is the list of variables that you can override :
  * **label**:            'label Name'         
  * **value**:            default: 0
  * **step**:             default: 3
  * **color**:            default: "#F13502"
  * **tooltip**:          default: true

## AoT and Universal support

This module supports [AoT pre-compiling](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
and [Universal server-side rendering](https://github.com/angular/universal).

## Changelog

[Changelog available here](https://github.com/musecz/ng2-ring-chart/blob/master/CHANGELOG.md).

## Roadmap

- Unit tests

## License

MIT