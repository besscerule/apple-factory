import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { AppleDisplayComponent } from './apple-display/apple-display.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppleDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
