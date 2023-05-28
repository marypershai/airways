import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TicketState } from '../../shared/models/ticket-state';

const selectTicketFeature = createFeatureSelector<TicketState>('tickets');

export const selectTicketsTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.ticketsTo
);
export const selectTicketsFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.ticketsFrom
);

export const selectGetDateTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.dateTo
);
export const selectGetDateFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.dateFrom
);

export const selectChangeCurrency = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.currency
);

export const selectGetSearchDateStart = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.dateStart
);

export const selectGetSearchDateEnd = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.dateEnd
);

export const selectGetSearchTo = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.to
);

export const selectGetSearchFrom = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.from
);

export const selectGetSearch = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search
);

export const selectGetWay = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.way
);

export const selectFlights = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.flights
);
export const selectGetPassengers = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket.search.passengers
);

export const selectGetBasket = createSelector(
  selectTicketFeature,
  (ticketState) => ticketState.basket
);
