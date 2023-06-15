import { Component } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {
  seats: any[];
  seatNo:number=0



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
      this.seatNo=this.seatNo+1;

    } else {

      this.seats[index] = 'available';
      this.seatNo=this.seatNo-1;

    }

  }

 

  isBooked(seat: any) {

    return seat === 'temporarily-booked';

  }

}
