import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { TicketsFacade } from '../../../shared/services/tickets-facade.service';
import phones from '../../../constants/phone-codes.json';
import { CountryCode } from '../../../shared/models/country-code.model';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss'],
})
export class PassengerDetailsComponent implements OnInit {
  public bookingForm!: FormGroup;
  public passengerList: string[] = [];
  public phoneCodes!: CountryCode[];

  public searchData = {
    way: '',
    from: '',
    to: '',
    dateStart: new Date(),
    dateEnd: new Date(),
    passengers: {
      adult: 0,
      child: 0,
      infant: 0,
    },
  };

  constructor(
    private fb: FormBuilder,
    private location: Location,
    public ticketsFacade: TicketsFacade,
    private router: Router
  ) {
    this.phoneCodes = phones;
  }

  public ngOnInit(): void {
    this.ticketsFacade.passengers$.pipe(first()).subscribe((passengers) => {
      const { adult, child, infant } = passengers;
      const repeatAdult = Array(adult).fill('adult');
      const repeatChild = Array(child).fill('child');
      const repeatInfant = Array(infant).fill('infant');
      this.passengerList.push(...repeatAdult, ...repeatChild, ...repeatInfant);
    });
    this.bookingForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      countryCode: ['+375', [Validators.required]],
      passengers: this.fb.array([]),
    });
    this.passengerForm();
  }

  public locationBack(): void {
    this.location.back();
  }

  private passengerForm(): void {
    for (let i = 0; i < this.passengerList.length; i++) {
      const passengerForm = this.fb.group({
        passenger: [this.passengerList[i]],
        name: ['', [Validators.required, Validators.pattern(/^\D+$/)]],
        lastName: ['', [Validators.required, Validators.pattern(/^\D+$/)]],
        dateOfBirth: ['', [Validators.required]],
        sex: ['male', [Validators.required]],
        specialAssist: [''],
      });
      (<FormArray>this.bookingForm.controls['passengers']).push(passengerForm);
    }
  }

  public onSubmit(): void {
    const { controls } = this.bookingForm;
    if (this.bookingForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
    }
    if (this.bookingForm.valid) {
      this.ticketsFacade.addPassengersPage(this.bookingForm.value);
      this.router.navigate(['/booking/summary']);
    }
  }

  public get passengers(): FormArray {
    return this.bookingForm.controls['passengers'] as FormArray;
  }
}
