import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { City } from '../../models/city.model';
import { FormGroupTyped } from '../../../utils/form.util';
import { SearchForm } from '../../models/search-form.model';
import { TicketsFacade } from '../../services/tickets-facade.service';

@Component({
  selector: 'app-destination-select',
  templateUrl: './destination-select.component.html',
  styleUrls: ['./destination-select.component.scss'],
})
export class DestinationSelectComponent implements OnInit {
  @Input() public form!: FormGroupTyped<SearchForm>;
  @Input() public isReverseButton!: boolean;
  public citiesList: City[] = [];

  constructor(private ticketsFacade: TicketsFacade) {}

  public get formControlFrom(): FormControl {
    return this.form.controls.from;
  }

  public get formControlTo(): FormControl {
    return this.form.controls.to;
  }

  public get isReverseButtonDisabled(): boolean {
    return !this.formControlTo.value || !this.formControlFrom.value;
  }

  public ngOnInit(): void {
    this.citiesList = this.generateCitiesList();
  }

  public changeDirection(): void {
    const tmp = this.formControlTo.value;
    this.formControlTo.setValue(this.formControlFrom.value);
    this.formControlFrom.setValue(tmp);
  }

  private generateCitiesList(): City[] {
    return [
      { name: 'Aberdeen', shortCode: 'ABZ', location: 'Dyce, United Kingdom' },
      {
        name: 'Amsterdam',
        shortCode: 'AMS',
        location: 'Schiphol, Netherlands',
      },
      { name: 'Baku', shortCode: 'GYD', location: 'Heydar Aliyev, Azerbaijan' },
      { name: 'Barcelona', shortCode: 'BCN', location: 'El Prat, Spain' },
      { name: 'Catania', shortCode: 'CTA', location: 'Fontanarossa, Italy' },
      { name: 'Dublin', shortCode: 'DUB', location: 'Ireland' },
    ];
  }

  public onSelectionChangeFrom(city: string): void {
    this.ticketsFacade.addFromOnSearch(city);
  }

  public onSelectionChangeTo(city: string): void {
    this.ticketsFacade.addToOnSearch(city);
  }
}
