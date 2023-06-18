import { Component, ViewChild } from '@angular/core';
import { BusDto } from '../BusDto';
import { DemoServiceService } from '../demo-service.service';
import { Schedule } from '../Scheulde';
import { Seat } from '../Seat';
import { SeatsComponent } from '../seats/seats.component';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})

export  class SearchBusComponent  {
  
  constructor(private demosearch:DemoServiceService){
    this.getDropdownValues();
  }

 
  toggleDivVisibility(divId: string) {
    const div  = document.getElementById(divId);
    if (div!=null) {
      div.style.display='block'
    }
    
  }
  @ViewChild(SeatsComponent) appSeatsComponent!: SeatsComponent;

  callProcessSeats(): void {
    this.appSeatsComponent.process(this.seat);
  }
  
  seat:Seat[]=[]
  errorMessage: string='';
  textbox1: string='';
  textbox2: string='';
  textbox3: string='';
  schedules: Schedule[]=[];
  busDto: BusDto[]=[];
  dropdownValues: string[]=[];
  fare:number[]=[];
  fareOfSchedule:number=0
 

  getDropdownValues(): void {
    this.demosearch.getDropdownValues().subscribe(
      (values: string[]) => {
        this.dropdownValues = values;
      },
      (error: any) => {
        console.log('Error fetching dropdown values:', error);
      }
    );}

    setfare(f:number)
    {
      this.fareOfSchedule=f
    }
  search(): void {
    this.schedules=[]; 
    this.errorMessage=''  
    this.demosearch.search(this.textbox1, this.textbox2, this.textbox3).subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
       
          this.schedules = response as Schedule[];
        } else {
          console.log("Invalid response format");
        }
      },
      (error) => {
        console.error(error);
        this.errorMessage = "BUS NOT FOUND";
      }
    );

      }

      searchbus(): void {
        this.busDto=[]
        this.errorMessage=''  
        this.demosearch.searchbus(this.textbox1, this.textbox2, this.textbox3).subscribe(
          (response: any) => {
            if (Array.isArray(response)) {
              this.busDto = response as BusDto[];
            } else {
              console.log("Invalid response format");
            }
          },
          (error) => {
            console.error(error);
            this.errorMessage = "BUS NOT FOUND";
          }
        );
    
          }
          getfare(): void {
            
            this.fare=[];
            this.errorMessage=''  
            this.demosearch.getfare(this.textbox1, this.textbox2, this.textbox3).subscribe(
              (response: any) => {
                if (Array.isArray(response)) {
                  this.fare = response as  number[];
                } else {
                  console.log("Invalid response format");
                }
              },
              (error) => {
                console.error(error);
                this.errorMessage = "BUS NOT FOUND";
              }
            );
        
              }

              getseats(s:number): void {
            
                this.seat=[];
                this.errorMessage=''  
                this.demosearch.getseats(s).subscribe(
                  (response: any) => {
                    if (Array.isArray(response)) {
                      this.seat = response as  Seat[];
                      console.log(this.seat)
                      this.callProcessSeats()
                    } else {
                      console.log("Invalid response format");
                    }
                  },
                  (error) => {
                    console.error(error);
                    this.errorMessage = "SEAT NOT FOUND";
                  }
                );
            
                  }
 
    }
