import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusDto } from '../BusDto';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent {
  busId!:number;
	
	regNo:string='';
	engineNo:string='';
	busType:string='';
	busName:string='';
	totalSeats!:number;
	bus:BusDto[]=[]
	dropdownValues: number[]=[];
	isDropdownSelected: boolean = false;
  
  constructor(private service:DemoServiceService,private router: Router) {
	this.getDropdownValues();
   }
   onDropdownChange() {
	// Check if a value is selected
	if(!this.isDropdownSelected)
	{
		for(let i=0;i<this.bus.length;i++)
		{
			if(this.busId==this.bus[i].busId)
			{
				this.busName=this.bus[i].busName
				
				this.busType=this.bus[i].busType
				this.regNo=this.bus[i].regNo
				this.totalSeats=this.bus[i].totalSeats
				this.engineNo=this.bus[i].engineNo
			}
		}
	 
	}
  }
   getDropdownValues(): void {
    this.service.getDropdownValuesbus().subscribe(
		
		(response: any) => {
		if (Array.isArray(response)) {
			this.bus=response as BusDto[]	
			for(let i=0;i<this.bus.length;i++)
			{
				this.dropdownValues[i]=this.bus[i].busId
			}
		 
      }
	  else {
		console.log("Invalid response format");
	  }
	},
      (error: any) => {
        console.log('Error fetching dropdown values:', error);
      }
    );}
updatebus(){
  const bus = new BusDto(this.busId,this.regNo,this.engineNo,this.busType,this.busName,this.totalSeats)
   
    this.service.updateBus(bus).subscribe(
      response => {
        console.log(response);
        console.log("bus updated")
        this.router.navigate(['/adminhomepage']);
      }
      );
      alert("Bus Updated")
    }

}
