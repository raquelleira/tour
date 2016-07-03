import { provideRouter, RouterConfig }  from '@angular/router';
//import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
//import { HeroDetailComponent } from './hero-detail.component';
import { EventComponent } from './event.component';
import { EventDetailComponent } from './event-detail.component';

const routes: RouterConfig = [
  {
    path: 'events',
    component: EventComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true
  },
  {
    path: 'detail/:id',
    component: EventDetailComponent
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];