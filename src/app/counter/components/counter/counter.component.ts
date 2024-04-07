import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }} 🎉</p>
    <button (click)="udpateNumber(+1)">+1</button>
    <button (click)="resetNumber()">Reset</button>
    <button (click)="udpateNumber(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  constructor() {}

  udpateNumber(value: number):void {
    this.counter += value;
  }
  resetNumber():void {
    this.counter = 10;
  }
}