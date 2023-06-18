import { AfterContentInit, Component, Input } from '@angular/core';
import { Seat } from '../Seat';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {
   @Input() seat:Seat[]=[]
   @Input() fhault:String=''
   @Input() thault:String=''
   @Input() fare:number=0
   @Input() date:String=''
    seats: any=[];
    n:number=0;
  
  seatNo: number = 0
  bookedSeats: Array<number>=[];

  constructor() {
  

    this.seats = Array(40).fill('available');

    // this.seats[1] = 'booked';

    // this.seats[5] = 'booked';

    // this.seats[15] = 'booked';

    // this.seats[17] = 'booked';

  }
  
 process(seat: Seat[]):void{
  this.seats = Array(40).fill('available');
  this.seat=seat;
  this.n=1;
  console.log(this.fare)
  console.log(this.date)
  this.seat.forEach((s,i) => {
 
    if(s.fHault===this.fhault && s.tHault===this.thault && s.status === 1){
     // console.log("hai")
      this.seats[s.seatNo-1]= 'booked'
    }; 
    this.n=s.seatNo
  
  });
 }
 

  toggleSeatStatus(index: number) {

    if (this.seats[index] === 'booked') {

      // Seat is already booked, do nothing

      return;

    }

    if (this.seats[index] === 'available') {

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
}
