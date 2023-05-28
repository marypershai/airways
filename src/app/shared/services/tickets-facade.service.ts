import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addSearchInfo,
  loadAddDateFrom,
  loadAddDateTo,
  loadAddFrom,
  loadAddTo,
  loadPassengers,
} from '../../store/actions/add-search.actions';
import { PassengersPage } from '../models/ticket-state';
import {
  changeDateOnTicketsFrom,
  changeDateOnTicketsTo,
} from '../../store/actions/get-tickets.actions';
import { loadChangeCurrencys } from '../../store/actions/change-currency.actions';
import {
  selectChangeCurrency,
  selectFlights,
  selectGetBasket,
  selectGetDateFrom,
  selectGetDateTo,
  selectGetPassengers,
  selectGetSearch,
  selectGetSearchDateEnd,
  selectGetSearchDateStart,
  selectGetSearchFrom,
  selectGetSearchTo,
  selectGetWay,
  selectTicketsFrom,
  selectTicketsTo,
} from '../../store/selectors/tickets.selectors';
import { loadAddTicketFlights } from '../../store/actions/add-ticket-flight.actions';
import { TicketData } from '../../booking/constants/ticket-data';
import { SearchForm } from '../models/search-form.model';
import { loadAddPassengers } from '../../store/actions/add-passengers.actions';
import { Passenger } from '../models/passenger.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsFacade {
  public currency$ = this.store.select(selectChangeCurrency);
  public selectGetSearch$ = this.store.select(selectGetSearch);
  public selectGetSearchDateStart$ = this.store.select(
    selectGetSearchDateStart
  );
  public selectGetSearchDateEnd$ = this.store.select(selectGetSearchDateEnd);
  public from$ = this.store.select(selectTicketsFrom);
  public to$ = this.store.select(selectTicketsTo);
  public way$ = this.store.select(selectGetWay);
  public flights = this.store.select(selectFlights);
  public searchFrom$ = this.store.select(selectGetSearchFrom);
  public searchTo$ = this.store.select(selectGetSearchTo);
  public passengers$ = this.store.select(selectGetPassengers);
  public selectGetBasket$ = this.store.select(selectGetBasket);
  public selectGetDateFrom$ = this.store.select(selectGetDateFrom);
  public selectGetDateTo$ = this.store.select(selectGetDateTo);

  constructor(private store: Store) {}

  public addTicketFlights(flights: TicketData[]): void {
    this.store.dispatch(loadAddTicketFlights({ flights }));
  }

  public changeCurrency(currency: 'EUR' | 'USA' | 'PLN' | 'RUB'): void {
    this.store.dispatch(loadChangeCurrencys({ currency }));
  }

  public addSearchData(data: SearchForm): void {
    this.store.dispatch(addSearchInfo({ form: data }));
  }

  public addPassengersPage(passengers: PassengersPage): void {
    this.store.dispatch(loadAddPassengers({ passengers }));
  }

  public changeDateFrom(dateFrom: Date): void {
    this.store.dispatch(changeDateOnTicketsFrom({ dateFrom }));
  }

  public changeDateTo(dateTo: Date): void {
    this.store.dispatch(changeDateOnTicketsTo({ dateTo }));
  }

  public addDateToOnSearch(dateTo: Date): void {
    this.store.dispatch(loadAddDateTo({ dateTo }));
  }

  public addDateFromOnSearch(dateFrom: Date): void {
    this.store.dispatch(loadAddDateFrom({ dateFrom }));
  }

  public addFromOnSearch(from: string): void {
    this.store.dispatch(loadAddFrom({ from }));
  }

  public addToOnSearch(to: string): void {
    this.store.dispatch(loadAddTo({ to }));
  }

  public addPassengers(passengers: Passenger): void {
    this.store.dispatch(loadPassengers({ passengers }));
  }
}
