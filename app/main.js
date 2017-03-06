/**
 * main.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-16 16:34:06
 * @version $angular2 1.1.0$
 * description 作为angular2的编译器，来编译跟模块
 */
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
