import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ErrorDisplayService {

  constructor() {}

  public display(error: string = 'some error'): void {
    console.error(error);
  }

  public getErrorCount(form: FormGroup, strictValidation: Boolean = false): number {
    let nbrOfErrors = 0;

    for (const key in form.controls) {
      if (form.controls[key].invalid) {
        if (strictValidation || form.controls[key].touched) {
          nbrOfErrors++;
        }
      }
    }

    return nbrOfErrors;
  }
}
