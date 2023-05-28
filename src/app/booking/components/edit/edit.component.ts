import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchForm } from '../../../shared/models/search-form.model';
import { ControlsOf, FormGroupTyped } from '../../../utils/form.util';

type EditFlightForm = SearchForm;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() public searchData!: SearchForm;
  public isEditFormVisible = false;
  public editFlightForm!: FormGroupTyped<EditFlightForm>;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.createEditFlightForm();
  }

  public onEditClick(): void {
    this.isEditFormVisible = !this.isEditFormVisible;
  }

  public convertPassengers(): number {
    return (
      this.searchData.passengers.adult +
      this.searchData.passengers.child +
      this.searchData.passengers.infant
    );
  }

  private createEditFlightForm(): void {
    this.editFlightForm = this.fb.group<ControlsOf<EditFlightForm>>({
      way: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      dateEnd: ['', Validators.required],
      dateStart: ['', Validators.required],
      passengers: ['', Validators.required],
    });
  }

  public isMultipleWay(): boolean {
    return +this.searchData.way > 1;
  }
}
