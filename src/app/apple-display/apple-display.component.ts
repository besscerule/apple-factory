import { Component, EventEmitter, OnInit } from '@angular/core';
import { Apple } from '../interfaces/apple.interface';
import { Observable, filter, map, tap } from 'rxjs';
import { ApplesService } from '../services/apples.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppleDialogComponent } from '../apple-dialog/apple-dialog.component';

@Component({
  selector: 'app-apple-display',
  templateUrl: './apple-display.component.html',
  styleUrls: ['./apple-display.component.css']
})

export class AppleDisplayComponent implements OnInit {

  badApples$: Observable<Apple[]> | undefined
  goodApples$: Observable<Apple[]> | undefined

  constructor(private applesService: ApplesService) { }

  ngOnInit() {
    const apples$ = this.applesService.loadAllApples()
    this.badApples$ = apples$.pipe(
      map(apples => apples.filter(apple => apple.isBad))
    )
    this.goodApples$ = apples$.pipe(
      map(apples => apples.filter(apple => !apple.isBad))
    )
  }


}