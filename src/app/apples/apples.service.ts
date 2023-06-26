import { Injectable } from '@angular/core';
import { Apple } from './apple.interface';
import { APPLE_COLORS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ApplesService {

  constructor() { }

  appleGenerator(): Apple {
    return {
      id: this.getRandomNumber(10000),
      isBad: this.getRandomNumber(2) ? true: false,
      color: APPLE_COLORS[this.getRandomNumber(4)],
      sizeCm: this.getRandomNumber(14) + 1
    }
  }

  getRandomNumber(range: number): number {
    return Math.floor((Math.random() * range))
  }


}
