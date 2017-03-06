/**
 * HeroesComponent.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-22 13:10:19
 * @version $1.1.7$
 */
import { Component } from '@angular/core';
//<my-heroes></my-heroes>
//我们必须告诉它位置，所以我们把<router-outlet>标签添加到模板的底部。
// RouterOutlet是RouterModule提供的指令之一。 当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。
@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl:'app.component.html',
	styleUrls:['app.component.css']
	// template:`
	//   	<h1>{{title}}</h1>
		
	// 	 <nav>
 //     <a routerLink="/dashboard">Dashboard</a>
 //     <a routerLink="/heroes">Heroes</a>
 //   </nav>
	// 	<router-outlet></router-outlet>
	// `
})
export class AppComponent  {
	 title = 'Tour of Heroes';
}
