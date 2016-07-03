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
var event_1 = require('./event');
var event_service_1 = require('./event.service');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var EventDetailComponent = (function () {
    function EventDetailComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.isEqual = true;
        this.navigated = false; // true if navigated here
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.eventService.getEvent(id)
                    .then(function (event) { return _this.event = event; });
            }
            else {
                _this.navigated = false;
                _this.event = new event_1.Event();
            }
        });
    };
    EventDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EventDetailComponent.prototype.save = function () {
        var _this = this;
        this.eventService
            .save(this.event)
            .then(function (event) {
            _this.event = event; // saved event, w/ id if new
            _this.goBack(event);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    EventDetailComponent.prototype.goBack = function (savedEvent) {
        if (savedEvent === void 0) { savedEvent = null; }
        this.close.emit(savedEvent);
        if (this.navigated) {
            window.history.back();
        }
    };
    EventDetailComponent.prototype.updated = function (event) {
        if (this.isEqual) {
            this.event.endDate = event.startDate;
            this.event.startDate_ = event.startDate;
        }
        else {
            if (event.startDate > this.event.endDate) {
                alert("Start date should be before end date ");
                this.event.startDate = this.event.startDate_;
            }
        }
    };
    EventDetailComponent.prototype.updateEndDate = function (event) {
        if (this.event.endDate < this.event.startDate) {
            this.event.endDate = this.event.endDate_;
            alert("End date should be after start date!");
        }
        else {
            this.isEqual = false;
            this.event.endDate_ = event.endDate;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', event_1.Event)
    ], EventDetailComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventDetailComponent.prototype, "close", void 0);
    EventDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-event-detail',
            templateUrl: 'app/event-detail.component.html',
            styleUrls: ['app/event-detail.component.css'],
            directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-detail.component.js.map