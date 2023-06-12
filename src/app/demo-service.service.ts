import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  

  constructor(private http:HttpClient) {}

    search(date: string, source: string, dest: string) {
    
  
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/${date}/${source}/${dest}`);
    }
  }

