import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl='http://localhost:4000/';


  constructor(private http: HttpClient) {
    
   }
   createEventFn(eventName,startDate, endDate){
     let body = {
       eventName: eventName,
       startDate: startDate,
       endDate: endDate
     };
     return this.http.post(this.baseUrl+'api/create',body)
   }
   getAllEventsFn(){
     return this.http.get(this.baseUrl+'api/get');
   }
   deleteEvent(id){
    return this.http.delete(this.baseUrl+'api/remove/'+id);
  }
}
