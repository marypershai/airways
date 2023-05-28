import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Passenger } from '../../models/passenger.model';
import { TicketsFacade } from '../../services/tickets-facade.service';

@Component({
  selector: 'app-passengers-picker',
  templateUrl: './passengers-picker.component.html',
  styleUrls: ['./passengers-picker.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: PassengersPickerComponent },
  ],
})
export class PassengersPickerComponent
  implements AfterViewInit, ControlValueAccessor, MatFormFieldControl<string>
{
  @Input() public targetElement!: CdkOverlayOrigin;
  @Input() public passengersControl!: FormControl;
  @Output() public controlClosed = new EventEmitter<Passenger>();

  public form!: FormGroup;

  public static nextId = 0;

  public triggerOrigin!: ElementRef;
  public overlayWidth = 0;
  public isListVisible = false;

  public passengers: Passenger = {
    adult: 0,
    child: 0,
    infant: 0,
  };

  public id = `app-passenger-picker-${PassengersPickerComponent.nextId++}`;
  public stateChanges = new Subject<void>();
  public autofilled = false;
  public controlType = 'app-passengers-picker';
  public userAriaDescribedBy = '';
  public _disabled = false;
  public _placeholder = '';
  public _required = false;
  public focused = false;
  public touched = false;

  public onChange: () => void = () => {};
  public onTouched: () => void = () => {};

  constructor(
    private fb: FormBuilder,
    private _elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef,
    @Optional() @Self() public ngControl: NgControl,
    private ticketsFacade: TicketsFacade
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.form = fb.group({
      passengers: [this.passengersString, Validators.required],
    });
  }

  public toggleListVisibility(): void {
    if (this.isListVisible && !this.focused) {
      this.isListVisible = false;
      this.stateChanges.next();
      this.controlClosed.emit(this.passengers);
      this.ticketsFacade.addPassengers(this.passengers);
    }
  }

  public ngAfterViewInit(): void {
    const { width } =
      this.targetElement.elementRef.nativeElement.getBoundingClientRect();
    this.overlayWidth = width;
    this.triggerOrigin = this.targetElement.elementRef.nativeElement;
    this.cdr.detectChanges();
  }

  public onCounterChanged<T extends keyof Passenger>(
    value: number,
    property: T
  ): void {
    this.passengers = {
      ...this.passengers,
      [property]: value,
    };
    this.value = this.passengersString;
  }

  public get passengerControlValue(): Passenger {
    return (this.passengersControl.value as Passenger) || this.passengers;
  }

  public get arrowIcon(): string {
    return `arrow_drop_${this.isListVisible ? 'up' : 'down'}`;
  }

  public get passengersString(): string {
    return Object.entries(this.passengers).reduce(
      (acc, [key, value], index, arr) => {
        return `${acc}${value} ${key[0].toUpperCase() + key.slice(1)}${
          index !== arr.length - 1 ? ', ' : ''
        }`;
      },
      ''
    );
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  public get value(): string | null {
    return this.form.value;
  }

  public set value(pass: string | null) {
    this.form.setValue({ passengers: pass });
  }

  public get required(): boolean {
    return this._required;
  }

  public set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
    if (this._disabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
    this.stateChanges.next();
  }

  public get empty(): boolean {
    return !this.form.value;
  }

  public get shouldLabelFloat(): boolean {
    return !this.empty;
  }

  public get errorState(): boolean {
    return this.touched && !this.form.valid; // Object.values(this.passengers).every(v => !v);
  }

  public onFocusIn(): void {
    if (!this.focused) {
      this.focused = true;
      this.isListVisible = true;
      this.stateChanges.next();
    }
  }

  public onFocusOut(event: FocusEvent): void {
    if (
      !this._elementRef.nativeElement.contains(event.relatedTarget as Element)
    ) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  public onContainerClick(): void {}

  public setDescribedByIds(): void {}

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(obj: string | null): void {
    this.value = obj;
  }
}
