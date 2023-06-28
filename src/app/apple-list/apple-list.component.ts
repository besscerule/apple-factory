import { Component, Input } from '@angular/core';
import { Apple } from '../interfaces/apple.interface';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AppleDialogComponent} from '../apple-dialog/apple-dialog.component';

@Component({
  selector: 'app-apple-list',
  templateUrl: './apple-list.component.html',
  styleUrls: ['./apple-list.component.css']
})
export class AppleListComponent {
  constructor(private dialog: MatDialog) { }
  @Input()
  apples: Apple[] | null = []

  editApple(apple: Apple) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = apple;
    const dialogRef = this.dialog.open(AppleDialogComponent, dialogConfig);
  }
}