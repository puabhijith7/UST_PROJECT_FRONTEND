import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';
import { Schedule } from '../Scheulde';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent {
  textbox1: string='';
  textbox2: string='';
  textbox3: string='';
  s:Schedule[]=[]
  constructor(private demosearch:DemoServiceService){}
  search() {
    
    this.demosearch.search(this.textbox1, this.textbox2, this.textbox3)
      .subscribe(
        (response: any) => {
          // Handle the response from the API
          if (Array.isArray(response)) {
            const scheduleResponse: Schedule[] = response as Schedule[];
            const responseContainer = document.getElementById('response-container');
            if (responseContainer !== null) {
              let formattedResponse = '';
              response.forEach((schedule) => {
                formattedResponse += `<div>Schedule ID: ${schedule.scheduleId}, Date: ${schedule.date}, Departure Time: ${schedule.departureTime}, Arrival Time: ${schedule.arrivalTime}, RouteId: ${schedule.routeId}, BusId: ${schedule.busId}</div>`;
              });
              responseContainer.innerHTML = formattedResponse;
            }
          } else {
            console.log("Invalid response format");
          }
        },
        (error) => {
          // Handle any errors
          console.log("hai");
          console.error(error);
        }
      );
      }}
