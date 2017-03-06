/**
 * app-routing.module.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-23 13:08:37
 * @version $路由模块$
 */

import {NgModule}  from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';

 const routes :Routes = [
 {
 	path:'',
 	redirectTo:'/dashboard',
 	pathMatch:'full'
 },
 {
	path: 'heroes',
	component: HeroesComponent
 },
 {
	      	path:'dashboard',
	      	component : DashboardComponent
      	},{
      		path: 'detail/:id',
  			  component: HeroDetailComponent  //参数化路由
      	}
 ];
 @NgModule({
 	imports : [RouterModule.forRoot(routes)],
 	exports :[RouterModule]
 })
 export class AppRoutingModule {}