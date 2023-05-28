import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingLayoutComponent } from './layouts/booking-layout/booking-layout.component';
import { FlightComponent } from './components/flight/flight.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EditComponent } from './components/edit/edit.component';
import { MaterialModule } from '../material/material.module';
import { PassengerDetailsComponent } from './layouts/passenger-details/passenger-details.component';
import { SummaryComponent } from './layouts/summary/summary.component';
import { SharedModule } from '../shared/shared.module';
import { TicketToComponent } from './components/ticket-to/ticket-to.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    BookingLayoutComponent,
    FlightComponent,
    TicketComponent,
    EditComponent,
    PassengerDetailsComponent,
    SummaryComponent,
    TicketToComponent,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterLink,
    SharedModule,
  ],
  exports: [PassengerDetailsComponent, TicketComponent],
})
export class BookingModule {}
