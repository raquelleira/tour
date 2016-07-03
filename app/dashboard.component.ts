import { Component, OnInit } from '@angular/core';
//import { Hero } from './hero';
import { Event } from './event';
//import { HeroService } from './hero.service';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

constructor(
  private router: Router,
  //private heroService: HeroService,
  private eventService: EventService) {
}
    
 // heroes: Hero[] = [];
  events: Event[] = [];

  ngOnInit() {
    //this.heroService.getHeroes()
     // .then(heroes => this.heroes = heroes.slice(1, 5));

      this.eventService.getEvents()
      .then(events => this.events = events.slice(1, 5));

  }
 gotoDetail(event: Event) {
    let link = ['/detail', event.id];
    this.router.navigate(link);
    }

    
}

