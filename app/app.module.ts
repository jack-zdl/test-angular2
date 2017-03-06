/**
 * app.module.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-16 16:36:38
 * description angular2的跟模块，来引入其他的特性模块
 * @version $angular2 1.1.0$
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';//用来对表单进行双向绑定的插件
import {AppRoutingModule} from './app-routing.module';
//import { RouterModule ,Routes}   from '@angular/router';
//添加路由模块

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  //    RouterModule.forRoot([ //添加路由
  //    	{
		//   path: '',
		//   redirectTo: '/dashboard',
		//   pathMatch: 'full'
		// },
  //     	{
	 //        path: 'heroes',
	 //        component: HeroesComponent
  //     	},
  //     	{
	 //      	path:'dashboard',
	 //      	component : DashboardComponent
  //     	},{
  //     		path: 'detail/:id',
  // 			  component: HeroDetailComponent  //参数化路由
  //     	}
  //   ])
  ],
  declarations : [
    AppComponent,
     HeroDetailComponent,
     HeroesComponent,
     DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/