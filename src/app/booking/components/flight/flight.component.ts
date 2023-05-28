import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { first, Subscription } from 'rxjs';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { TicketData } from '../../constants/ticket-data';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent implements OnInit, OnDestroy {
  public svgFrom = 'assets/images/svg/airplanemode_right.svg';
  public svgTo = 'assets/images/svg/airplanemode_left.svg';
  public svgTimeTo = 'assets/images/svg/Icon_air_right.svg';
  public svgTimeFrom = 'assets/images/svg/Icon_air_left.svg';
  public searchData = {
    way: '',
    from: '',
    to: '',
    dateStart: new Date(),
    dateEnd: new Date(),
    passengers: {
      adult: 0,
      child: 0,
      infant: 0,
    },
  };
  public way = '';
  public flight: TicketData[] = [];
  public isEditTo = true;
  public isEditFrom = true;
  public from = '';
  public to = '';
  public isDisabledButton = true;
  private subscription = new Subscription();
  private dataFrom: TicketData = {
    date: new Date(),
    arrivalTime: '',
    departureTimeFrom: '',
    departureTimeTo: '',
    price: {
      EUR: '',
      USA: '',
      RUB: '',
      PLN: '',
    },
    seats: 0,
    flightCode: '',
  };
  private dataTo: TicketData = {
    date: new Date(),
    arrivalTime: '',
    departureTimeFrom: '',
    departureTimeTo: '',
    price: {
      EUR: '',
      USA: '',
      RUB: '',
      PLN: '',
    },
    seats: 0,
    flightCode: '',
  };

  constructor(
    private location: Location,
    public ticketsFacade: TicketsFacade
  ) {}

  public locationBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.ticketsFacade.way$.pipe(first()).subscribe((way) => {
        this.way = way;
      })
    );

    this.subscription.add(
      this.ticketsFacade.searchFrom$.subscribe((from) => {
        this.from = from;
      })
    );
    this.subscription.add(
      this.ticketsFacade.searchTo$.subscribe((to) => {
        this.to = to;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onEditTo(edit: boolean): void {
    this.isEditTo = edit;
    this.isDisabledButton = this.disable();
  }
  public onEditFrom(edit: boolean): void {
    this.isEditFrom = edit;
    this.isDisabledButton = this.disable();
  }

  public getDataFrom(data: TicketData): void {
    this.dataFrom = data;
  }
  public getDataTo(data: TicketData): void {
    this.dataTo = data;
  }

  public disable(): boolean {
    if (this.way === '2' && !this.isEditFrom && !this.isEditTo) {
      return false;
    }
    if ((this.way === '1' || this.way === '') && !this.isEditFrom) {
      return false;
    }
    return true;
  }

  public dispatchOnClick(): void {
    this.ticketsFacade.addTicketFlights([this.dataFrom, this.dataTo]);
  }
}
