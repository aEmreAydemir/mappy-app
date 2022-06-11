import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey:"fake key" //if you use other method remove AgmCoreModule implementation
  })   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
