import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {
  passengers: any[] = [];

  numofseats: Array<number>=this.service.numofseats;
  

  constructor(private service:DemoServiceService,private router:Router) {

    this.passengers = Array(this.numofseats.length);

  }




 




  submitForm() {

    // Perform any necessary form submission logic

    console.log(this.passengers);

  }

}
