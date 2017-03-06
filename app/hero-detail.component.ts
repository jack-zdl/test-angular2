/**
 * hero-detail.component.ts
 * @authors zhangdelei (zhangdelei@bsgchina.com)
 * @date    2016-12-21 13:43:33
 * @version $1.1.7$
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
//路由
//新的HeroDetailComponent应该从ActivatedRoute服务的可观察对象params中取得id参数， 并通过HeroService服务获取具有这个指定id的英雄数据。
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';

import { Hero } from './hero';
@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl:'hero-detail.component.html',
  styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
   // @Input()
    hero: Hero;

    constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
    ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}
  goBack(): void {
  this.location.back();
}
   
}