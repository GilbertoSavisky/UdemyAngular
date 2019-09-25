import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();
  rates: number[] = [1, 2, 3, 4, 5];
  rate= 0;
  previousrate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.previousrate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r) {
    if (this.previousrate === undefined) {
      this.previousrate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.previousrate !== undefined) {
      this.rate = this.previousrate;
    }
    this.previousrate = undefined;
  }
}
