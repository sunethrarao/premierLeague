import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/event.service';


@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  addEventForm = new FormGroup({
    eventName: new FormControl(),
    startDate: new FormControl(new Date()),
    endDate: new FormControl((new Date()).toISOString())

  });

  constructor(private event: EventService) { }

  ngOnInit() {
  }

  createEventFn(){
   var eventInfo = this.addEventForm.value;
    this.event.createEventFn(eventInfo.eventName, eventInfo.startDate, eventInfo.endDate)
    .subscribe((res)=>{
      console.log(res);
    });
    
  }
  

}
