import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() public counter: number = 0;
  @Output() public counterChange = new EventEmitter<number>();

  public increment(): void {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  public decrement(): void {
    this.counter--;
    this.counterChange.emit(this.counter);
  }
}
