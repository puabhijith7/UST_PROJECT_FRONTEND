import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './addbus/addbus.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { AdminbusComponent } from './adminbus/adminbus.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminscheduleComponent } from './adminschedule/adminschedule.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PassengerComponent } from './passenger/passenger.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { SeatsComponent } from './seats/seats.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { ViewbusComponent } from './viewbus/viewbus.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';

const routes: Routes = [
  {path:'search',component:SearchBusComponent},
  {path:'seats',component:SeatsComponent},
  {path:'passenger',component:PassengerComponent},
  {path:'',component:LandingpageComponent},
  {path:'admin',component:AdminpageComponent},
  {path:'adminbus',component:AdminbusComponent},
  {path:'adminschedule',component:AdminscheduleComponent},
  {path:'addbus',component:AddbusComponent},
  {path:'viewbus',component:ViewbusComponent},
  {path:'updatebus',component:UpdatebusComponent},
  {path:'addschedule',component:AddscheduleComponent},
  {path:'viewschedule',component:ViewscheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
