import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent {
  constructor(private service:DemoServiceService){this.getschedule();}





  schedule: any;

  getschedule(){

    this.service.getschedule().subscribe(

      response => {

        this.schedule = response;

        console.log(this.schedule);

       

       

      }

    )

  }

}
