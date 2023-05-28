import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import moment from 'moment';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import { ControlsOf, FormGroupTyped } from '../../../utils/form.util';
import { SearchForm } from '../../../shared/models/search-form.model';

@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.component.html',
  styleUrls: ['./route-search.component.scss'],
})
export class RouteSearchComponent implements OnInit {
  public searchForm!: FormGroupTyped<SearchForm>;

  constructor(
    private fb: FormBuilder,
    private ticketsFacade: TicketsFacade,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.generateSearchForm();
  }

  public onSubmitForm(): void {
    this.ticketsFacade.addSearchData(this.searchForm.getRawValue());
    this.router.navigate(['/booking/flights']);
  }

  public isMultipleWay(): boolean {
    return +this.searchForm.controls.way.value > 1;
  }

  private generateSearchForm(): void {
    this.searchForm = this.fb.group<ControlsOf<SearchForm>>({
      way: ['2', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      dateStart: [moment(), Validators.required],
      dateEnd: [moment().add('day', 7), Validators.required],
      passengers: ['', Validators.required],
    });
  }
}
