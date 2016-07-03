import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event }        from './event';
import { EventService } from './event.service';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'my-event-detail',
  templateUrl: 'app/event-detail.component.html',
  styleUrls: ['app/event-detail.component.css'],
  directives: [AlertComponent, DATEPICKER_DIRECTIVES]
})
export class EventDetailComponent implements OnInit, OnDestroy {
  @Input() event: Event;
  @Output() close = new EventEmitter();
  isEqual = true;
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.eventService.getEvent(id)
            .then(
                event => this.event = event
            );
      } else {
        this.navigated = false;
        this.event = new Event();
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save() {
    this.eventService
        .save(this.event)
        .then(event => {
          this.event = event; // saved event, w/ id if new
          this.goBack(event);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedEvent: Event = null) {
    this.close.emit(savedEvent);
    if (this.navigated) { window.history.back(); }
  }
  updated(event) {
      if ( this.isEqual ){
        this.event.endDate = event.startDate;
        this.event.startDate_ = event.startDate;
      }else{
          if ( event.startDate > this.event.endDate ){
              alert ("Start date should be before end date ");
              this.event.startDate = this.event.startDate_;
          }
      }      
  }
  updateEndDate(event){

      if ( this.event.endDate < this.event.startDate ){
          this.event.endDate = this.event.endDate_;
          alert ("End date should be after start date!");
      }else{
        this.isEqual = false;
        this.event.endDate_ = event.endDate;
      }

  }
}