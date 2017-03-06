/**
 * HERO.SERVICE.TS  服务---将数据源以何种方式导出，例如以getGeros()的函数导出原始数据
 * @authors ZHANGDELEI (zhangdelei@bsgchina.com)
 * @date    2016-12-22 10:10:17
 * @version $1.1.7$
 */
import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-hero';

@Injectable()
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
	getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 4000)) // delay 2 seconds
    .then(() => this.getHeroes());
  }
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }
}