import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HEROES} from './mock-heroes';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{
    public heroes = HEROES;
    public title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];
    onSelect(hero: Hero) { this.selectedHero = hero; }
    constructor(private _heroService: HeroService) {}
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
}
