import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusDto } from '../BusDto';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent {
  busId!:number;
	busNo!:number;
	regNo:string='';
	engineNo:string='';
	busType:string='';
	busName:string='';
	totalSeats!:number;
  errorMessage: string='';
  
  constructor(private service:DemoServiceService,private router: Router) { }
addbus(){
  const bus = new BusDto(this.busId,this.busNo,this.regNo,this.engineNo,this.busType,this.busName,this.totalSeats)
   
    this.service.addbusok(bus).subscribe(
      response => {
        console.log(response);
        console.log("bus added")
        this.router.navigate(['/adminhomepage']);
      },
      (error) => {
        console.error(error);
        this.errorMessage = "BUS-ID ALREADY EXIST";
      }
      );
     
    }

}
