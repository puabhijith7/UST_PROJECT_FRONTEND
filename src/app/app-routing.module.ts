import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { SeatsComponent } from './seats/seats.component';

const routes: Routes = [
//   {path:'',component:SearchBusComponent},
  {path:'',component:SeatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
