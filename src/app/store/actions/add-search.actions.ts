import { createAction, props } from '@ngrx/store';
import { SearchForm } from '../../shared/models/search-form.model';
import { Passenger } from '../../shared/models/passenger.model';

export const addSearchInfo = createAction(
  '[AddSearch] Add search info',
  props<{ form: SearchForm }>()
);

export const loadAddDateTo = createAction(
  '[AddSearch] Load ddDateTo',
  props<{ dateTo: Date }>()
);

export const loadAddDateFrom = createAction(
  '[AddSearch] Load AddDateFrom',
  props<{ dateFrom: Date }>()
);
export const loadAddFrom = createAction(
  '[AddSearch] Load AddFrom',
  props<{ from: string }>()
);

export const loadAddTo = createAction(
  '[AddSearch] Load AddTo',
  props<{ to: string }>()
);

export const loadPassengers = createAction(
  '[AddSearch] Load Passengers',
  props<{ passengers: Passenger }>()
);
