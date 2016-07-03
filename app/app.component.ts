import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
//import { HeroService }        from './hero.service';
import { EventService }        from './event.service';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>     
      <a [routerLink]="['/events']" routerLinkActive="active">Events</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    //HeroService, 
    EventService
  ]
})
export class AppComponent {
  title = 'Events';
}