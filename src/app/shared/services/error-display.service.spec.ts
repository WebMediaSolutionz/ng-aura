import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Components
import { ErrorDisplayService } from '../../shared/services/error-display.service';

// Pipes
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

describe('ErrorDisplay Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorDisplayService
      ]
    });
  });

  describe(`constructor()`, () => {
    it('should be initialized', inject(
      [ErrorDisplayService],
      (service: ErrorDisplayService) => {
        expect(service).toBeTruthy();
      }
    ));
  });

  describe(`display()`, () => {
    it('should invoke MdSnackBar.open to display error message', inject(
      [ErrorDisplayService],
      (service: ErrorDisplayService) => {
        let spy = spyOn(service['sb'], 'open');
        let errorMsg1 = 'error message';
        let errorMsg2 = 'some error';

        service.display(errorMsg1);

        expect(spy).toHaveBeenCalledWith(errorMsg1, 'close', {duration: 2000});

        service.display();

        expect(spy).toHaveBeenCalledWith(errorMsg2, 'close', {duration: 2000});
      }
    ));
  });

  describe(`getErrorCount()`, () => {
    it('should return the right number of form errors', inject(
      [ErrorDisplayService],
      (service: ErrorDisplayService) => {
        let form = new FormGroup({
          firstField: new FormControl('', Validators.maxLength(2)),
          secondField: new FormControl('', Validators.maxLength(2)),
          thirdField: new FormControl('', Validators.maxLength(2))
        });

        form.setValue({
          firstField: 'b',
          secondField: 'bl',
          thirdField: 'blah'
        });

        expect(service.getErrorCount(form, true)).toBe(1);

        form.setValue({
          firstField: 'b',
          secondField: 'b',
          thirdField: 'b'
        });

        expect(service.getErrorCount(form, true)).toBe(0);

        form.setValue({
          firstField: 'blah',
          secondField: 'blah',
          thirdField: 'blah'
        });

        expect(service.getErrorCount(form, true)).toBe(3);
        expect(service.getErrorCount(form)).toBe(0);
      }
    ));
  });
});
