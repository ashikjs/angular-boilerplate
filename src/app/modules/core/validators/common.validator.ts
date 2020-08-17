import {AbstractControl, ValidatorFn} from '@angular/forms';

export function validateAlphaNum(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const regex = new RegExp('^[a-zA-Z0-9]+$', 'i');
    const isAlphaNum = regex.test(control.value);

    return (control.value === '') || isAlphaNum ? null : {'alphaNum': true};
  };
}

export function validateEmail(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const regex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$', 'i');
    const isEmail = regex.test(control.value);

    return (control.value === '') || isEmail ? null : {'email': true};
  };
}

export function matchInput(inputName): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const group = control.parent;

    if (group === undefined) {
      return null;
    }

    const input = group.controls[inputName];

    return input && (input.value === control.value) ? null : {'matchInput': true};
  };
}
