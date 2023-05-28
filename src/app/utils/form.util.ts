import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export type ControlsOf<T> = {
  [K in keyof T]: [unknown, ValidatorFn | ValidatorFn[] | null];
};

export type FormGroupTyped<T> = FormGroup<{
  [K in keyof ControlsOf<T>]: FormControl;
}>;
