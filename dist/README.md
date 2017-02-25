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




## Browser support

[All browsers supporting IndexedDB](http://caniuse.com/#feat=indexeddb), ie. all current browsers :
Firefox, Chrome, Opera, Safari, Edge and IE10+.

IE8/9 are supported but use native localStorage as a fallback, 
so internal operations are synchronous (the public API remains asynchronous-like).

Older or special browsers (like Opera Mini) not supporting IndexedDB and localStorage 
use a fake storage, so the data won't be persistent but the module won't crash.

This module is not impacted by IE/Edge missing IndexedDB features.

This module has not been tested against Safari 8/9 buggy IndexedDB implementation,
but it uses very basic features of IndexedDB so it may be fine. Otherwise,
use the [IndexedDBshim polyfill](https://github.com/axemclion/IndexedDBShim).

## AoT and Universal support

This module supports [AoT pre-compiling](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
and [Universal server-side rendering](https://github.com/angular/universal).

## Changelog



## Roadmap

- Unit tests

## License

MIT