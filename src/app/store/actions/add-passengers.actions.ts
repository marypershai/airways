import { createAction, props } from '@ngrx/store';
import { PassengersPage } from '../../shared/models/ticket-state';

export const loadAddPassengers = createAction(
  '[AddPassengers] Load AddPassengers',
  props<{ passengers: PassengersPage }>()
);
