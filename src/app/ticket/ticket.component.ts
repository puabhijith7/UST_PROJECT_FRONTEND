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
  bustype=this.service.busdto[0].busType
  busname=this.service.busdto[0].busName
  date=this.service.date
  passengerDto=this.service.passengerdto
  fare=this.service.fare*(this.numofseats.length)


}
