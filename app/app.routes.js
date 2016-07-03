"use strict";
var router_1 = require('@angular/router');
//import { HeroesComponent } from './heroes.component';
var dashboard_component_1 = require('./dashboard.component');
//import { HeroDetailComponent } from './hero-detail.component';
var event_component_1 = require('./event.component');
var event_detail_component_1 = require('./event-detail.component');
var routes = [
    {
        path: 'events',
        component: event_component_1.EventComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
    {
        path: 'detail/:id',
        component: event_detail_component_1.EventDetailComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map