/**
 * app.component.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-16 16:38:14
 * description angular2的根组件
 * OnInit  生命周期钩子
 * @version $angular2 1.1.0$
 */
import { Component, OnInit  } from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
/*
 *在appconmonent中去使用HeroService，为了解决new一个HeroService的弊端，
 *我们采用依赖注入的方式，
 */
// import {Hero} form 'hero.html';

// export class Hero {
//   id: number;
//   name: string;
// }
// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
// <input value="{{hero.name}}" placeholder="name">  placeholder="name"
/*
<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
  	<div>
    	<label>name: </label>
    	<input [(ngModel)]="hero.name" >
  	</div>
  	  <p *ngIf="heroes.length > 3">There are many heroes!</p>
  	   [class.selected]="hero === selectedHero"  //属性绑定，为元素添加样式类
 */
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls:['heroes.component.css']
//providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。
// AppComponent会使用那个服务来获取英雄列表，在它组件树中的每一个子组件也同样如此。
// providers: [HeroService]//依赖注入 2我们还得注册一个HeroService提供商，来告诉注入器如何创建HeroService。
 // 要做到这一点，我们在@Component组件的元数据底部添加providers数组属性如下：
 
})

export class HeroesComponent implements OnInit {//添加的是二个属性 title和hero。方便在模板中去使用
	//1 变量初始化
  	//title = 'Tour of Heroes';
   // heroes  = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  //	heroes = HEROES;//暴露这些数组
  	heroes:Hero[];//定义私有属性，他的类型是Hero类的数组
	selectedHero : Hero;
	//依赖注入 1 定义一个构造函数并定义一个私有属性。
	//它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
	//当创建AppComponent实例时，Angular 知道需要先提供一个HeroService的实例。
	 constructor(
     private router:Router,//将英雄列表添加路由，引导到hero-detail.componeent.ts
     private heroService: HeroService) { }
//要基于"ES6承诺"来执行异步函数$.ajax()
	getHeroes(): void {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}
	  // getHeroes(): void {
	  // 	// this.heroes = this.heroService.getHeroes();
   // // this.heroService.getHeroes();//.then(heroes => this.heroes = heroes);
  	// }
  //Angular 就会主动调用这个钩
  ngOnInit(): void {
    this.getHeroes();
  }
	onSelect(hero: Hero): void {
  		this.selectedHero = hero;
	}
   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 // myHero  = this.heroes [0];
  // hero: Hero = {
  //   id: 1,
  //   name: 'angular2'
  // };
  //2 变量构造函数
  // atitle : string ;
  // name : string ;
  // constructor(){
  // 	this.title = "Tour of Heroes";
  // 	this.name = "angular2";
  // }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
