import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TDFComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    TDFComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
