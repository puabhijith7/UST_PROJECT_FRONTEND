import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoServiceService } from './demo-service.service';
import { SearchBusComponent } from './search-bus/search-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent,SearchBusComponent]
})
export class AppModule { }
