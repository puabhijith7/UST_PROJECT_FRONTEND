import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  passengers:number[]=[]
  constructor(private service:DemoServiceService){
    this.passengers=this.service.numofseats
  }
  numofseats: Array<number>=this.service.numofseats;
  source=this.service.fhault
  destination=this.service.thault
  bustype=this.service.bus.busType
  busname=this.service.bus.busName
  date=this.service.date
  passengerDto=this.service.passengerdto
  fare=this.service.fare*(this.numofseats.length)


}
