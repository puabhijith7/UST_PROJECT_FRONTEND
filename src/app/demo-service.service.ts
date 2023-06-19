import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seat } from './Seat';

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
  


  constructor(private http: HttpClient) { }

  getDropdownValues(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8081/api/v1/buses/routeDetails/all');
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

}