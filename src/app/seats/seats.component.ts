import { Component } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {
  seats: any[];
  seatNo: number = 0
  bookedSeats: Array<number>=[];

  constructor() {

    this.seats = Array(40).fill('available');

    this.seats[2] = 'booked';

    this.seats[5] = 'booked';

    this.seats[15] = 'booked';

    this.seats[17] = 'booked';

  }

  toggleSeatStatus(index: number) {

    if (this.seats[index] === 'booked') {

      // Seat is already booked, do nothing

      return;

    }

    if (this.seats[index] === 'available') {

      this.seats[index] = 'temporarily-booked';
      this.seatNo = this.seatNo + 1;
      this.bookSeats(index);
      if (this.seatNo > 5) {
        alert("MAXIMUM NUMBER OF SEATS CAN BE BOOKED AT A TIME EXCEEDED!!!!")
        this.seatNo = this.seatNo - 1;
        this.seats[index] = 'available';
        this.unbookSeats(index);
        console.log(this.bookedSeats)
      }
      

    } else {

      this.seats[index] = 'available';
      this.seatNo = this.seatNo - 1;
      this.unbookSeats(index);


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
