import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppleDisplayComponent } from './apple-display/apple-display.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplesService } from './services/apples.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppleDialogComponent } from './apple-dialog/apple-dialog.component';
import { AppleListComponent } from './apple-list/apple-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleDisplayComponent,
    AppleDialogComponent,
    AppleListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [ApplesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
