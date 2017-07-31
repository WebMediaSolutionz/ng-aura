import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// Components
import { LoginComponent } from './login.component';

// Services
import { AuthService } from '../../shared/services/auth.service';
import { AuthServiceStub } from '../../shared/services/auth.service.stub';
import { RouterStub } from '../../shared/services/router.service.stub';
import { ErrorDisplayService } from '../../shared/services/error-display.service';
import { ErrorDisplayServiceStub } from '../../shared/services/error-display.service.stub';

// Classes
import { Credentials } from '../../shared/custom-types/classes/credentials';

describe('Login Component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub },
        FormBuilder,
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it('should set the value of the account if it is in localstorage', () => {
      const account = 'QB1486';

      localStorage.setItem('account', account);

      fixture.detectChanges();

      expect(component['credentials'].account).toBe(account);
    });

    it( 'should set the value of the account to an empty string ' +
        'if it is not in localstorage', () => {
      localStorage.removeItem('account');

      fixture.detectChanges();

      expect(component['credentials'].account).toBe('');
    });
  });

  describe('login()', () => {
    it( 'should invoke ErrorDisplayService.display to display ' +
        'error message when form is invalid', () => {
      let spy = spyOn(component['errorDisplayService'], 'display');

      fixture.detectChanges();
      component.login(null);

      expect(component['loginForm'].valid).toBeFalsy();
      expect(spy).toHaveBeenCalled();
    });

    it('should invoke AuthService.login to authenticate user when the form is valid', () => {
      let spy = spyOn(component['authService'], 'login');

      fixture.detectChanges();

      component['loginForm'].controls['account'].setValue('a');
      component['loginForm'].controls['username'].setValue('a');
      component['loginForm'].controls['password'].setValue('a');

      component.login(null);

      expect(component['loginForm'].valid).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  });
});
