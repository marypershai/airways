import { createAction, props } from '@ngrx/store';

export const loadChangeCurrencys = createAction(
  '[ChangeCurrency] Load ChangeCurrencys',
  props<{ currency: 'EUR' | 'USA' | 'PLN' | 'RUB' }>()
);
