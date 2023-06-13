import { Component } from '@angular/core';
import { BusDto } from '../BusDto';
import { DemoServiceService } from '../demo-service.service';
import { Schedule } from '../Scheulde';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent {
  textbox1: string='';
  textbox2: string='';
  textbox3: string='';
  schedules: Schedule[]=[];
  busDto: BusDto[]=[];
  constructor(private demosearch:DemoServiceService){}
  search() {
    
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
      }
    );

      }

      searchbus() {
    
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
          }
        );
    
          }
    }
