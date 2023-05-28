import { Passenger } from './passenger.model';

export interface SearchForm {
  way: string;
  from: string;
  to: string;
  dateStart: Date | null;
  dateEnd: Date | null;
  passengers: Passenger;
}
