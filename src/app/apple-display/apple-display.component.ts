import { Component, OnInit } from '@angular/core';
import { Apple } from '../interfaces/apple.interface';
import { HttpClient } from '@angular/common/http';
import { LOCALHOST } from '../constants';
import { Observable, map } from 'rxjs';
import { ApplesService } from '../services/apples.service';

@Component({
  selector: 'app-apple-display',
  templateUrl: './apple-display.component.html',
  styleUrls: ['./apple-display.component.css']
})
export class AppleDisplayComponent implements OnInit {

  badApples$: Observable<Apple[]> | undefined
  goodApples$: Observable<Apple[]> | undefined

  constructor(private applesService: ApplesService) {}

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