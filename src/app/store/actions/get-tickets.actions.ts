import { createAction, props } from '@ngrx/store';

export const changeDateOnTicketsTo = createAction(
  '[ChangeDateOnTickets] ChangeDateOnTickets',
  props<{ dateTo: Date }>()
);

export const changeDateOnTicketsFrom = createAction(
  '[ChangeDateFromTickets] ChangeDateOnTickets',
  props<{ dateFrom: Date }>()
);
