/**
 * DashboardComponent.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-22 14:06:51
 * @version $1.1.7$
 */
import {Component} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	 moduleId: module.id,//是专门用来定义templateUrl: 'dashboard.component.html',
	// 设置moduleId属性到module.id，相对模块加载templateUrl
	  selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls:['dashboard.component.css']
	// template:`
	// 	<h3>My DashBoard</h3>
	// `

})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}