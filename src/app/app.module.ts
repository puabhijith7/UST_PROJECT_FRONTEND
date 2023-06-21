import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoServiceService } from './demo-service.service';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { SeatsComponent } from './seats/seats.component';
import { PassengerComponent } from './passenger/passenger.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBusComponent,
    SeatsComponent,
    PassengerComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent,SearchBusComponent,SeatsComponent]
})
export class AppModule { }
