import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoServiceService } from '../demo-service.service';
import { Schedule } from '../Scheulde';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent {
  scheduleId!: number
  date!: Date
  departureTime!: string
  arrivalTime!: string
  routeId!: number
  busId!: number
  constructor(private service:DemoServiceService,private router: Router) { }
addschedule(){
const schedule = new Schedule(this.scheduleId,this.date,this.departureTime,this.arrivalTime,this.routeId,this.busId)
 
  this.service.addSchedule(schedule).subscribe(
    response => {
      console.log(response);
     
      // this.router.navigate(['/adminhomepage']);
    }
    );
   
  }


}
