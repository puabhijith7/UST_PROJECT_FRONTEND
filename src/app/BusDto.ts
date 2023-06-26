export class BusDto {
    busId: number =0;
    busNo: number=0;
    regNo: string ='';
    engineNo: string ='';
    busType: string ='';
    busName: string ='';
    totalSeats: number =0
    constructor(
      busId: number,
      busNo: number,
      regNo: string,
      engineNo: string,
      busType: string,
      busName: string,
      totalSeats: number
    ) {
      this.busId = busId;
      this.busNo = busNo;
      this.regNo = regNo;
      this.engineNo = engineNo;
      this.busType = busType;
      this.busName = busName;
      this.totalSeats = totalSeats;
    }
  }
  