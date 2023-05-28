import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { combineLatest, map, Subscription } from 'rxjs';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { DialogService } from '../../../core/services/dialog.service';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, OnDestroy {
  public digitAdult = 0;
  public digitChild = 0;
  public digitInfant = 0;
  public taxAdult = 0;
  public taxChild = 0;
  public taxInfant = 0;
  public sumAdult = 0;
  public sumChild = 0;
  public sumInfant = 0;
  public totalSum = 0;
  public currency = '';
  private subscription = new Subscription();
  constructor(
    private location: Location,
    public ticketsFacade: TicketsFacade,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {
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
            this.digitAdult = digitsWay * basket.search.passengers.adult;
            this.digitChild = digitsWay * basket.search.passengers.child * 0.7;
            this.digitInfant =
              digitsWay * basket.search.passengers.infant * 0.4;
            this.taxAdult = this.digitAdult * 0.4;
            this.taxChild = this.digitChild * 0.3;
            this.taxInfant = this.digitInfant * 0.2;
            this.sumAdult = this.taxAdult + this.digitAdult;
            this.sumChild = this.taxChild + this.digitChild;
            this.sumInfant = this.taxInfant + this.digitInfant;
            this.totalSum = this.sumAdult + this.sumChild + this.sumInfant;
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
  public locationBack(): void {
    this.location.back();
  }

  public confirmPurchase(): void {
    this.dialogService.openDialog(ConfirmModalComponent);
  }
}
