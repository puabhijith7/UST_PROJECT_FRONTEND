import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { Nav1Component } from './nav1/nav1.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DescriptionComponent } from './description/description.component';
import { Description1Component } from './description1/description1.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollimageComponent } from './scrollimage/scrollimage.component';
import { Nav2Component } from './nav2/nav2.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminbusComponent } from './adminbus/adminbus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { ViewbusComponent } from './viewbus/viewbus.component';
import { AdminscheduleComponent } from './adminschedule/adminschedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './JwtInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchBusComponent,
    SeatsComponent,
    PassengerComponent,
    TicketComponent,
    Nav1Component,
    MainpageComponent,
    DescriptionComponent,
    Description1Component,
    AboutusComponent,
    FooterComponent,
    ScrollimageComponent,
    Nav2Component,
    LandingpageComponent,
    AdminpageComponent,
    AdminbusComponent,
    AddbusComponent,
    UpdatebusComponent,
    ViewbusComponent,
    AdminscheduleComponent,
    AddscheduleComponent,
    ViewscheduleComponent,
    AdminnavComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DemoServiceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent,SearchBusComponent,SeatsComponent]
})
export class AppModule { }
