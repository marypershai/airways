import { createReducer, on } from '@ngrx/store';
import { loadAddTicketFlights } from '../actions/add-ticket-flight.actions';
import { TicketState } from '../../shared/models/ticket-state';
import {
  changeDateOnTicketsFrom,
  changeDateOnTicketsTo,
} from '../actions/get-tickets.actions';
import { loadChangeCurrencys } from '../actions/change-currency.actions';
import {
  addSearchInfo,
  loadAddDateFrom,
  loadAddDateTo,
  loadAddFrom,
  loadAddTo,
  loadPassengers,
} from '../actions/add-search.actions';
import { loadAddPassengers } from '../actions/add-passengers.actions';

export const initialState: TicketState = {
  dateFrom: new Date('2023-03-12'),
  dateTo: new Date('2023-01-11'),
  currency: 'EUR',
  ticketsTo: [
    {
      date: new Date(),
      arrivalTime: '2h 50m',
      departureTimeFrom: '8:40',
      departureTimeTo: '11:30',
      price: {
        EUR: '€147.40',
        USA: '$159,19',
        RUB: '₽12 418,45',
        PLN: 'zł667,72',
      },
      seats: 100,
      flightCode: 'FR 1925',
    },
    {
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
      seats: 30,
      flightCode: '',
    },
    {
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
      seats: 100,
      flightCode: 'FR 1925',
    },
    {
      date: new Date(),
      arrivalTime: '1h 45m',
      departureTimeFrom: '10:30',
      departureTimeTo: '12:15',
      price: {
        EUR: '€140,10',
        USA: '$152,71',
        RUB: '₽12 061,21',
        PLN: 'zł631,85',
      },
      seats: 10,
      flightCode: 'AA 100',
    },
    {
      date: new Date(),
      arrivalTime: '2h 50m',
      departureTimeFrom: '8:40',
      departureTimeTo: '11:30',
      price: {
        EUR: '€80,11',
        USA: '$87,32',
        RUB: '₽6 896,67',
        PLN: 'zł361,3',
      },
      seats: 50,
      flightCode: 'DL 876',
    },
    {
      date: new Date(),
      arrivalTime: '2h 10m',
      departureTimeFrom: '14:20',
      departureTimeTo: '16:30',
      price: {
        EUR: '€110.30',
        USA: '$120,23',
        RUB: '₽9 495,73',
        PLN: 'zł497,45',
      },
      seats: 80,
      flightCode: 'BA 203',
    },
    {
      date: new Date(),
      arrivalTime: '2h 30m',
      departureTimeFrom: '8:40',
      departureTimeTo: '11:10',
      price: {
        EUR: '€145.30',
        USA: '$158,38',
        RUB: '₽12 508,88',
        PLN: 'zł655,3',
      },
      seats: 35,
      flightCode: 'CX 8888',
    },
    {
      date: new Date(),
      arrivalTime: '2h 10m',
      departureTimeFrom: '13:20',
      departureTimeTo: '15:30',
      price: {
        EUR: '',
        USA: '$152,72',
        RUB: '₽12 062,07',
        PLN: 'zł631,9',
      },
      seats: 40,
      flightCode: 'DL 876',
    },
    {
      date: new Date(),
      arrivalTime: '2h 00m',
      departureTimeFrom: '9:35',
      departureTimeTo: '11:35',
      price: {
        EUR: '€111.30',
        USA: '$121,32',
        RUB: '₽9 581,82',
        PLN: 'zł501,96',
      },
      seats: 55,
      flightCode: 'CX 8888',
    },
    {
      date: new Date(),
      arrivalTime: '2h 50m',
      departureTimeFrom: '11:20',
      departureTimeTo: '13:10',
      price: {
        EUR: '€140.50',
        USA: '$153,15',
        RUB: '₽12 095,65',
        PLN: 'zł633,65',
      },
      seats: 33,
      flightCode: 'FR 1925',
    },
    {
      date: new Date(),
      arrivalTime: '1h 50m',
      departureTimeFrom: '17:50',
      departureTimeTo: '19:40',
      price: {
        EUR: '',
        USA: '$145,13',
        RUB: '₽11 462,88',
        PLN: 'zł600,51',
      },
      seats: 10,
      flightCode: 'BA 203',
    },
    {
      date: new Date(),
      arrivalTime: '2h 30m',
      departureTimeFrom: '12:20',
      departureTimeTo: '14:50',
      price: {
        EUR: '',
        USA: '$125,62',
        RUB: '₽9 921,87',
        PLN: 'zł519,78',
      },
      seats: 70,
      flightCode: 'AA 100',
    },
    {
      date: new Date(),
      arrivalTime: '2h 20m',
      departureTimeFrom: '11:30',
      departureTimeTo: '13:50',
      price: {
        EUR: '€115.25',
        USA: '$125,62',
        RUB: '₽9 921,87',
        PLN: 'zł519,78',
      },
      seats: 80,
      flightCode: 'CX 8888',
    },
    {
      date: new Date(),
      arrivalTime: '2h 10m',
      departureTimeFrom: '6:40',
      departureTimeTo: '8:50',
      price: {
        EUR: '€85.92',
        USA: '$93,65',
        RUB: '₽7 396,85',
        PLN: 'zł387,5',
      },
      seats: 90,
      flightCode: 'DL 876',
    },
  ],
  ticketsFrom: [
    {
      date: new Date(),
      arrivalTime: '2h 50m',
      departureTimeFrom: '8:40',
      departureTimeTo: '11:30',
      price: {
        EUR: '€147.40',
        USA: '$159,19',
        RUB: '₽12 418,45',
        PLN: 'zł667,72',
      },
      seats: 100,
      flightCode: 'FR 1925',
    },
    {
      date: new Date(),
      arrivalTime: '2h 40m',
      departureTimeFrom: '6:30',
      departureTimeTo: '9:10',
      price: {
        EUR: '€139.30',
        USA: '$151,84',
        RUB: '₽11 992,34',
        PLN: 'zł628,24',
      },
      seats: 30,
      flightCode: 'DL 876',
    },
    {
      date: new Date(),
      arrivalTime: '2h 10m',
      departureTimeFrom: '18:00',
      departureTimeTo: '20:10',
      price: {
        EUR: '€143.20',
        USA: '$156,09',
        RUB: '₽12 328,09',
        PLN: 'zł645,83',
      },
      seats: 100,
      flightCode: 'AA 100',
    },
    {
      date: new Date(),
      arrivalTime: '1h 30m',
      departureTimeFrom: '10:30',
      departureTimeTo: '12:00',
      price: {
        EUR: '',
        USA: '$152,71',
        RUB: '₽12 061,21',
        PLN: 'zł631,85',
      },
      seats: 10,
      flightCode: 'AA 100',
    },
    {
      date: new Date(),
      arrivalTime: '2h 50m',
      departureTimeFrom: '8:40',
      departureTimeTo: '11:30',
      price: {
        EUR: '€80,11',
        USA: '$87,32',
        RUB: '₽6 896,67',
        PLN: 'zł361,3',
      },
      seats: 50,
      flightCode: 'DL 876',
    },
    {
      date: new Date(),
      arrivalTime: '2h 10m',
      departureTimeFrom: '14:20',
      departureTimeTo: '16:30',
      price: {
        EUR: '€110.30',
        USA: '$120,23',
        RUB: '₽9 495,73',
        PLN: 'zł497,45',
      },
      seats: 80,
      flightCode: 'BA 203',
    },
    {
      date: new Date(),
      arrivalTime: '2h 30m',
      departureTimeFrom: '8:40',
      departureTimeTo: '11:10',
      price: {
        EUR: '€145.30',
        USA: '$158,38',
        RUB: '₽12 508,88',
        PLN: 'zł655,3',
      },
      seats: 35,
      flightCode: 'CX 8888',
    },
    {
      date: new Date(),
      arrivalTime: '2h 10m',
      departureTimeFrom: '13:20',
      departureTimeTo: '15:30',
      price: {
        EUR: '€140.11',
        USA: '$152,72',
        RUB: '₽12 062,07',
        PLN: 'zł631,9',
      },
      seats: 40,
      flightCode: 'DL 876',
    },
    {
      date: new Date(),
      arrivalTime: '2h 00m',
      departureTimeFrom: '9:35',
      departureTimeTo: '11:35',
      price: {
        EUR: '',
        USA: '$121,32',
        RUB: '₽9 581,82',
        PLN: 'zł501,96',
      },
      seats: 55,
      flightCode: 'CX 8888',
    },
    {
      date: new Date(),
      arrivalTime: '2h 50m',
      departureTimeFrom: '11:20',
      departureTimeTo: '12:10',
      price: {
        EUR: '€140.50',
        USA: '$153,15',
        RUB: '₽12 095,65',
        PLN: 'zł633,65',
      },
      seats: 33,
      flightCode: 'FR 1925',
    },
    {
      date: new Date(),
      arrivalTime: '1h 50m',
      departureTimeFrom: '17:50',
      departureTimeTo: '19:40',
      price: {
        EUR: '€133.15',
        USA: '$145,13',
        RUB: '₽11 462,88',
        PLN: 'zł600,51',
      },
      seats: 10,
      flightCode: 'BA 203',
    },
    {
      date: new Date(),
      arrivalTime: '2h 30m',
      departureTimeFrom: '12:20',
      departureTimeTo: '14:50',
      price: {
        EUR: '',
        USA: '$125,62',
        RUB: '₽9 921,87',
        PLN: 'zł519,78',
      },
      seats: 70,
      flightCode: 'AA 100',
    },
    {
      date: new Date(),
      arrivalTime: '2h 20m',
      departureTimeFrom: '11:30',
      departureTimeTo: '13:50',
      price: {
        EUR: '€115.25',
        USA: '$125,62',
        RUB: '₽9 921,87',
        PLN: 'zł519,78',
      },
      seats: 80,
      flightCode: 'CX 8888',
    },
    {
      date: new Date(),
      arrivalTime: '2h 10m',
      departureTimeFrom: '6:40',
      departureTimeTo: '8:50',
      price: {
        EUR: '',
        USA: '$93,65',
        RUB: '₽7 396,85',
        PLN: 'zł387,5',
      },
      seats: 90,
      flightCode: 'DL 876',
    },
  ],
  basket: {
    flights: [],
    search: {
      way: '',
      from: '',
      to: '',
      dateStart: null,
      dateEnd: null,
      passengers: {
        adult: 0,
        child: 0,
        infant: 0,
      },
    },
    passengers: {
      email: '',
      phoneNumber: 0,
      countryCode: '',
      passengers: [],
    },
  },
  error: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    changeDateOnTicketsTo,
    (state, action): TicketState => ({
      ...state,
      dateTo: action.dateTo,
    })
  ),
  on(
    changeDateOnTicketsFrom,
    (state, action): TicketState => ({
      ...state,
      dateFrom: action.dateFrom,
    })
  ),
  on(
    loadChangeCurrencys,
    (state, action): TicketState => ({
      ...state,
      currency: action.currency,
    })
  ),
  on(
    loadAddTicketFlights,
    (state, action): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        flights: [...action.flights],
      },
    })
  ),
  on(
    addSearchInfo,
    (state, { form }): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        search: form,
      },
    })
  ),
  on(
    loadAddPassengers,
    (state, action): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        passengers: {
          ...state.basket.passengers,
          ...action.passengers,
        },
      },
    })
  ),
  on(
    loadAddDateTo,
    (state, action): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        search: {
          ...state.basket.search,
          dateStart: action.dateTo,
        },
      },
    })
  ),
  on(
    loadAddFrom,
    (state, action): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        search: {
          ...state.basket.search,
          from: action.from,
        },
      },
    })
  ),
  on(
    loadAddTo,
    (state, action): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        search: {
          ...state.basket.search,
          to: action.to,
        },
      },
    })
  ),
  on(
    loadPassengers,
    (state, action): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        search: {
          ...state.basket.search,
          passengers: {
            ...state.basket.search.passengers,
            ...action.passengers,
          },
        },
      },
    })
  ),
  on(
    loadAddDateFrom,
    (state, action): TicketState => ({
      ...state,
      basket: {
        ...state.basket,
        search: {
          ...state.basket.search,
          dateEnd: action.dateFrom,
        },
      },
    })
  )
);
