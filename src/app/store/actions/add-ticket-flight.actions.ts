import { createAction, props } from '@ngrx/store';
import { TicketData } from '../../booking/constants/ticket-data';

export const loadAddTicketFlights = createAction(
  '[AddTicketFlight] Load AddTicketFlights',
  props<{ flights: TicketData[] }>()
);
