import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from './event';
import { EventService } from './event.service';
import { EventDetailComponent} from './event-detail.component';

@Component({
    selector: 'event',
    templateUrl: 'app/event.component.html',
    styleUrls:  ['app/event.component.css'],
    directives: [EventDetailComponent]
})

export class EventComponent implements OnInit{
    events: Event[];
    selectedEvent: Event;
    addingEvent = false;
    error: any;
    constructor(
        private router: Router,
        private eventService: EventService){ }
    
    getEvents(){
        this.eventService
        .getEvents()
        .then(
            events => this.events = events
        )
        .catch(error => this.error = error );
    }

    addEvent(){
        this.addingEvent = true;
        this.selectedEvent = null;
    }
    close(savedEvent: Event){
        this.addingEvent = false;
        if (savedEvent) {this.getEvents();}
    }
    deleteEvent(event: Event, value: any){
        value.stopPropagation();
        this.eventService
            .delete(event)
            .then(res => { 
                this.events = this.events.filter(e => e !== event);
                if ( this.selectedEvent === event ){this.selectedEvent = null; }
            })
            .catch(error => this.error = error);

    }
    ngOnInit(){
        this.getEvents();
    }
    onSelect(event: Event){
        this.selectedEvent = event;
        this.addingEvent = false;
    }
    gotoDetail(){
         this.router.navigate(['/detail', this.selectedEvent.id]);
    }

}