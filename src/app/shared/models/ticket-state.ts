import { TicketData } from '../../booking/constants/ticket-data';
import { SearchForm } from './search-form.model';

export interface TicketState {
  dateTo: Date;
  dateFrom: Date;
  currency: 'EUR' | 'USA' | 'PLN' | 'RUB';
  ticketsTo: TicketData[];
  ticketsFrom: TicketData[];
  basket: Basket;
  error: string | null;
  isLoading: boolean;
}

export interface Basket {
  flights: TicketData[];
  search: SearchForm;
  passengers: PassengersPage;
}

export interface PassengersPage {
  email: string;
  phoneNumber: number;
  countryCode: string;
  passengers: PassengersInfo[];
}

export interface PassengersInfo {
  dateOfBirth: Date;
  lastName: string;
  name: string;
  passenger: string;
  sex: string;
  specialAssist: string;
}
