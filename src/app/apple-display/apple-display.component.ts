import { Component, OnInit } from '@angular/core';
import { Apple } from '../interfaces/apple.interface';
import { Observable, map } from 'rxjs';
import { ApplesService } from '../services/apples.service';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-apple-display',
  templateUrl: './apple-display.component.html',
  styleUrls: ['./apple-display.component.css']
})

export class AppleDisplayComponent implements OnInit {

  badApples$: Observable<Apple[]> | undefined
  goodApples$: Observable<Apple[]> | undefined

  constructor(private applesService: ApplesService, private loading: LoadingService) { }

  ngOnInit() {
    this.reloadApples()
   }
 
   reloadApples() {
    const apples$ = this.applesService.loadAllApples()
    this.badApples$ = apples$.pipe(
      map(apples => apples.filter(apple => apple.isBad))
    )
    this.goodApples$ = apples$.pipe(
      map(apples => apples.filter(apple => !apple.isBad))
    )

    this.loading.showLoaderUntilCompleted(apples$)
    .subscribe();
  }


}