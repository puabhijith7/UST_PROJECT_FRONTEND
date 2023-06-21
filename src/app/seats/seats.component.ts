import { AfterContentInit, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoServiceService } from '../demo-service.service';
import { Seat } from '../Seat';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {
  seat: Seat[] =this.demosearch.seat;
  fhault: string =this.demosearch.fhault;
  thault: string =this.demosearch.thault;
  fare: number = this.demosearch.fare;
  date: string = this.demosearch.date;

   seats: any=[];
   n:number=0;
   seatNo: number = 0
   bookedSeats: Array<number>=[];
 
   constructor(private demosearch:DemoServiceService) {




    this.seats = Array(40).fill('available');

    setInterval(() => this.process(), 100);




  }

  //  seat: Seat[]
  
 process():void{
  // this.route.queryParams.subscribe((params) => {
  //   this.seat = params['seat'];
  //   this.fhault = params['fhault'];
  //   this.thault = params['thault'];
  //   this.fare = params['fare'];
  //   this.date = params['date'];
  // });
 // this.seats = Array(40).fill('available');
  // this.seat=this.seat;
  // console.log(this.demosearch.seat)
  this.seat=this.demosearch.seat
  // this.n=1;
  // console.log(this.fare)
  // console.log(this.date)
  this.seat.forEach((s,i) => {

    if(s.fHault===this.fhault && s.tHault===this.thault && s.status === 1){
     // console.log("hai")
      this.seats[s.seatNo-1]= 'booked'
    }; 
    // this.n=s.seatNo
  
  });
 }
 

  toggleSeatStatus(index: number) {

    if (this.seats[index] === 'booked') {

      // Seat is already booked, do nothing

      return;

    }

    if (this.seats[index] === 'available') {
      console.log(this.seat);

      this.seats[index] = 'temporarily-booked';
      this.seatNo = this.seatNo + 1;
      this.bookSeats(index+1);
      if (this.seatNo > 5) {
        alert("MAXIMUM NUMBER OF SEATS CAN BE BOOKED AT A TIME EXCEEDED!!!!")
        this.seatNo = this.seatNo - 1;
        this.seats[index] = 'available';
        this.unbookSeats(index+1);
        console.log(this.bookedSeats)
      }
      

    } else {

      this.seats[index] = 'available';
      this.seatNo = this.seatNo - 1;
      this.unbookSeats(index+1);


    }

  }

  public bookSeats(index: number)
  {
      this.bookedSeats.push(index);
  }

  public unbookSeats(ind:number)
  {
    let index = this.bookedSeats.indexOf(ind);
    this.bookedSeats.splice(index,1)
  }
  set(){
    this.bookedSeats.sort((a, b) => a - b);
    this.demosearch.numofseats=this.bookedSeats;
    console.log(this.demosearch.numofseats)
  }
}
