import { Component, EventEmitter, OnInit } from '@angular/core';
import { Apple } from '../interfaces/apple.interface';
import { Observable, filter, map, tap } from 'rxjs';
import { ApplesService } from '../services/apples.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AppleDialogComponent} from '../apple-dialog/apple-dialog.component';

@Component({
  selector: 'app-apple-display',
  templateUrl: './apple-display.component.html',
  styleUrls: ['./apple-display.component.css']
})

export class AppleDisplayComponent implements OnInit {

  badApples$: Observable<Apple[]> | undefined
  goodApples$: Observable<Apple[]> | undefined
  private applesChanged = new EventEmitter()

  constructor(private applesService: ApplesService, private dialog: MatDialog) {}

  ngOnInit() {
    const apples$ = this.applesService.loadAllApples()
  this.badApples$ = apples$.pipe(
    map(apples => apples.filter(apple => apple.isBad))
  )
  this.goodApples$ = apples$.pipe(
    map(apples => apples.filter(apple => !apple.isBad))
  )
  }

  editApple(apple: Apple) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = apple;
    const dialogRef = this.dialog.open(AppleDialogComponent, dialogConfig);
    dialogRef.afterClosed()
    .pipe(
      filter(val => !!val),
      tap(() => this.applesChanged.emit())
    )
      .subscribe(val => {

      })
  }
}