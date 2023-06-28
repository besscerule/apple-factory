import { Component, OnInit } from '@angular/core';
import { Apple } from '../interfaces/apple.interface';
import { HttpClient } from '@angular/common/http';
import { LOCALHOST } from '../constants';

@Component({
  selector: 'app-apple-display',
  templateUrl: './apple-display.component.html',
  styleUrls: ['./apple-display.component.css']
})
export class AppleDisplayComponent implements OnInit {

  badApples: Apple[] = [];
  goodApples: Apple[] = [];

  constructor(private http: HttpClient) {}

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
}