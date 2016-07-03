"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var event_service_1 = require('./event.service');
var event_detail_component_1 = require('./event-detail.component');
var EventComponent = (function () {
    function EventComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.addingEvent = false;
    }
    EventComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService
            .getEvents()
            .then(function (events) { return _this.events = events; })
            .catch(function (error) { return _this.error = error; });
    };
    EventComponent.prototype.addEvent = function () {
        this.addingEvent = true;
        this.selectedEvent = null;
    };
    EventComponent.prototype.close = function (savedEvent) {
        this.addingEvent = false;
        if (savedEvent) {
            this.getEvents();
        }
    };
    EventComponent.prototype.deleteEvent = function (event, value) {
        var _this = this;
        value.stopPropagation();
        this.eventService
            .delete(event)
            .then(function (res) {
            _this.events = _this.events.filter(function (e) { return e !== event; });
            if (_this.selectedEvent === event) {
                _this.selectedEvent = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    EventComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventComponent.prototype.onSelect = function (event) {
        this.selectedEvent = event;
        this.addingEvent = false;
    };
    EventComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedEvent.id]);
    };
    EventComponent = __decorate([
        core_1.Component({
            selector: 'event',
            templateUrl: 'app/event.component.html',
            styleUrls: ['app/event.component.css'],
            directives: [event_detail_component_1.EventDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, event_service_1.EventService])
    ], EventComponent);
    return EventComponent;
}());
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map