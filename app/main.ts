/**
 * main.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-16 16:34:06
 * @version $angular2 1.1.0$
 * description 作为angular2的编译器，来编译跟模块
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/