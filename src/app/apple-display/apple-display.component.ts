import { Component, OnInit } from '@angular/core';
import { Apple } from '../interfaces/apple.interface';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AppleDialogComponent} from '../apple-dialog/apple-dialog.component';

@Component({
  selector: 'app-apple-display',
  templateUrl: './apple-display.component.html',
  styleUrls: ['./apple-display.component.css']
})
export class AppleDisplayComponent implements OnInit {

  badApples: Apple[] = [];
  goodApples: Apple[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {
    this.http.get('/api/apples')
      .subscribe(
        res => {
          const response: any = res
          const apples: Apple[] = response.payload
          this.badApples = apples.filter(apple => apple.isBad);
          this.goodApples = apples.filter(apple => !apple.isBad);
        });
  }

  editApple(apple: Apple) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = apple;
    const dialogRef = this.dialog.open(AppleDialogComponent, dialogConfig);
  }
}