import { Component, Input, OnChanges, OnInit } from '@angular/core';
import moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { Passenger } from '../../models/passenger.model';
import { FormGroupTyped } from '../../../utils/form.util';
import { SearchForm } from '../../models/search-form.model';
import { DateService } from '../../../core/services/date.service';
import { TicketsFacade } from '../../services/tickets-facade.service';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.scss'],
})
export class DestinationInfoComponent implements OnInit, OnChanges {
  @Input() public isMultipleWay!: boolean;
  @Input() public form!: FormGroupTyped<SearchForm>;

  public startDate!: moment.Moment;
  public endDate!: moment.Moment;

  private subscription = new Subscription();

  constructor(
    private dateService: DateService,
    private ticketsFacade: TicketsFacade
  ) {}

  public get passengersControl(): FormControl {
    return this.form.controls.passengers;
  }

  public get startDateControl(): FormControl {
    return this.form.controls.dateStart;
  }

  public get endDateControl(): FormControl {
    return this.form.controls.dateEnd;
  }

  public ngOnChanges(): void {
    this.startDate = this.startDateControl.value;
    this.endDate = this.endDateControl.value;
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.dateService.format$.subscribe((format) =>
        this.onDateFormatChanged(format)
      )
    );
    this.subscription.add(
      this.startDateControl.valueChanges
        .pipe(
          tap((startDate) => {
            this.ticketsFacade.changeDateFrom(startDate);
          })
        )
        .subscribe()
    );
    this.subscription.add(
      this.endDateControl.valueChanges
        .pipe(
          tap((endDate) => {
            this.ticketsFacade.changeDateTo(endDate);
          })
        )
        .subscribe()
    );
  }

  public writePassengers(passengers: Passenger): void {
    this.passengersControl.setValue(passengers);
  }

  public onDateChange(
    event: MatDatepickerInputEvent<moment.Moment>,
    control?: 'startDate' | 'endDate'
  ): void {
    if (control === 'startDate') {
      this.startDateControl.setValue(event.value);
      return;
    }
    this.endDateControl.setValue(event.value);
  }

  private onDateFormatChanged(format: string): void {
    this.startDate = moment(this.startDate, format);
    this.endDate = moment(this.endDate, format);
  }
}
