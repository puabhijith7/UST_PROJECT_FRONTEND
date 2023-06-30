import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seat } from './Seat';
import { PassengerDto, RequestDto } from './RequestDto';
import { BusDto } from './BusDto';
import { Schedule } from './Scheulde';
import { User, Userlogin } from './User';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
 
  
 
  s:Seat[]=[];
  fare: number=0;
  date: string='';
  seat: Seat[]=[];
  fhault: string='';
  thault: string='';
  numofseats: Array<number>=[];
  scheduleId: number=0;
  addbusUrl: string;
  updateUrl: string;
  addscheduleUrl: string;
  busdto: BusDto[]=[];
  passengerdto: PassengerDto[] = [];
  bus!: BusDto;
  token!:string
 
  constructor(private http: HttpClient) {
    this.addbusUrl="http://localhost:8081/api/v1/buses/bus";
    this.updateUrl="http://localhost:8081/api/v1/buses/bus";
    this.addscheduleUrl="http://localhost:8082/api/v1/schedules/schedule/post"
   }

   getDropdownValuesbus(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:9090/api/v1/buses/bus');
  }
 

  getDropdownValues(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:9090/api/v1/buses/routeDetails/all');
  }
  
  search(date: string, source: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/${date}/${source}/${dest}`);
  }
  
  searchbus(date: string, source: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/bus/${date}/${source}/${dest}`);
  }
  
  getfare(date: string, source: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/fare/${date}/${source}/${dest}`);
  }
  getseats(s: number): Observable<any> {
    return this.http.get(`http://localhost:8082/api/v1/schedules/seat/${s}`);
}
book(requestDto: RequestDto): Observable<any> {
    return this.http.post('http://localhost:8083/api/v1/bookings/booking',requestDto)
}
addbusok(bus:BusDto):Observable<any>{
  return this.http.post(this.addbusUrl,bus);
}
updateBus(bus: BusDto):Observable<any> {
  return this.http.put(this.updateUrl,bus);
}
addSchedule(schedule: Schedule):Observable<any> {
  return this.http.post(this.addscheduleUrl,schedule);
}
getBus():Observable<any>{

  return this.http.get(this.addbusUrl);

}
getschedule():Observable<any>{

  return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/get`);

}
signupok(user: User):Observable<any> {
  console.log(user)
  return this.http.post('http://localhost:9090/auth/register',user);
}
loginok(user: any):Observable<any>  {
  return this.http.post('http://localhost:9090/auth/token',user,{ responseType : 'text' });
}

}