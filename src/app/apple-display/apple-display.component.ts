import { Component, OnInit } from '@angular/core';
import { APPLE_COLORS } from '../constants';
import { Apple } from '../apples/apple.interface';

@Component({
  selector: 'app-apple-display',
  templateUrl: './apple-display.component.html',
  styleUrls: ['./apple-display.component.css']
})
export class AppleDisplayComponent implements OnInit {

  constructor() { }
  apples: Apple[] = [{ id: 0, color: APPLE_COLORS[0], isBad: true, sizeCm: 4}]
  ngOnInit(): void {
  }

}
