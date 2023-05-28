export interface TicketData {
  date: Date;
  arrivalTime: string;
  departureTimeFrom: string;
  departureTimeTo: string;
  price: PriceCurrency;
  seats: number;
  flightCode: string;
}
interface PriceCurrency {
  EUR: string;
  USA: string;
  RUB: string;
  PLN: string;
}

// const initialStore = {
//   tickets: ['бэк'],
//   buscket: {
//     search: {
//       to: 'asdas',
//       from: 'asdas',
//       dataStart: new Date(),
//       dataEnd: new Date(),
//       passenges: {
//         adult: 2,
//         field: 2,
//         infant: 2,
//       },
//     },
//     flights: {
//       arrivalTime: '2h 50m',
//       departureTimeTo: '7:40',
//       departureTimeFrom: '8:40',
//       price: '146.40',
//       seats: 30,
//       flightCode: 'FR 1925',
//     },
//     input: {},
//   },
// };
