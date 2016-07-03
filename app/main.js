"use strict";
// Imports for loading & configuring the in-memory web api
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
//import { InMemoryDataService }               from './in-memory-data.service';
var in_memory_event_service_1 = require('./in-memory-event.service');
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_2.HTTP_PROVIDERS,
    { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    // { provide: SEED_DATA, useClass: InMemoryDataService },      // in-mem server data
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_event_service_1.InMemoryEventService } // in-mem server data
]);
//# sourceMappingURL=main.js.map