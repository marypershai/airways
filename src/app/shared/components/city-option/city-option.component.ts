import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  Input,
} from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-city-option',
  templateUrl: './city-option.component.html',
  styleUrls: ['./city-option.component.scss'],
})
export class CityOptionComponent {
  @Input() public city!: City;
  @Output() public valueChanged: EventEmitter<string> =
    new EventEmitter<string>();
  @HostListener('click')
  public onClick(): void {
    this.valueChanged.emit(this.city.name);
  }

  public get fullName(): string {
    return `${this.city.name} (${this.city.shortCode})`;
  }
}
