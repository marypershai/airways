import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { combineLatest, map, Subscription } from 'rxjs';
import { TicketsFacade } from '../../shared/services/tickets-facade.service';
import { Basket } from '../../shared/models/ticket-state';

export interface Ticket {
  number: number;
  flightCode: string;
  typeTrip: string;
  ticketsTo: string;
  ticketsFrom: string;
  dateTo: string;
  dateFrom: string;
  departureTimeTo: string;
  departureTimeFrom: string;
  price: string;
  passengers: string;
}
const ELEMENT_DATA: Ticket[] = [
  {
    number: 0,
    flightCode: 'FR 1925',
    typeTrip: 'Round',
    ticketsTo: 'Dublin — Warsaw',
    ticketsFrom: 'Modlin  — Dublin',
    dateTo: '10 Mar, 2023',
    dateFrom: '1 Mar, 2023',
    departureTimeTo: '11:20',
    departureTimeFrom: '8:40',
    price: '$152,72',
    passengers: '1 x Adult',
  },
];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public basket: Basket[] = [];
  public displayedColumns = [
    'select',
    'flightCode',
    'flight',
    'typeTrip',
    'dataTime',
    'passengers',
    'price',
    'edit',
  ];
  public dataSource = new MatTableDataSource<Basket>(this.basket);
  public selection = new SelectionModel<Ticket>(true, []);

  public totalSum = 0;
  public currency = '';

  private subscription = new Subscription();
  constructor(public ticketsFacade: TicketsFacade) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.ticketsFacade.selectGetBasket$.subscribe((basket) => {
        this.basket.push(basket);
      })
    );
    this.subscription.add(
      combineLatest(
        this.ticketsFacade.selectGetBasket$,
        this.ticketsFacade.currency$
      )
        .pipe(
          map(([basket, currency]) => {
            const price = basket.flights[0].price[currency];
            const digits = price.replace(/[^\d,]/g, '').replace(',', '.');
            const currencyPrice = price.replace(/[^\p{Sc}]/gu, '');
            const digitsWay = +digits * +basket.search.way;
            const digitAdult = digitsWay * basket.search.passengers.adult;
            const digitChild = digitsWay * basket.search.passengers.child * 0.7;
            const digitInfant =
              digitsWay * basket.search.passengers.infant * 0.4;
            const taxAdult = digitAdult * 0.4;
            const taxChild = digitChild * 0.3;
            const taxInfat = digitInfant * 0.2;
            const sumAdult = taxAdult + digitAdult;
            const sumChild = taxChild + digitChild;
            const sumInfant = taxInfat + digitInfant;
            this.totalSum = sumAdult + sumChild + sumInfant;
            if (currency === 'PLN') {
              this.currency = 'zl';
            } else {
              this.currency = currencyPrice;
            }
          })
        )
        .subscribe()
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public checkboxLabel(row?: Ticket): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.number + 1
    }`;
  }
}
