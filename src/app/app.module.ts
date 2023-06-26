import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppleDisplayComponent } from './apple-display/apple-display.component';
import { ApplesService } from './apples/apples.service';

@NgModule({
  declarations: [
    AppComponent,
    AppleDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApplesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
