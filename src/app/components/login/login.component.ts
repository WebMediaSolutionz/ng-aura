import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { AuthService } from '../../shared/services/auth.service';
import { ErrorDisplayService } from '../../shared/services/error-display.service';

// Classes
import { Credentials } from '../../shared/custom-types/classes/credentials';

@Component({
  moduleId: module.id,
  selector: 'ss2-login',
  templateUrl: 'login.aura.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  private formTitle: string = 'Welcome to PulseCloud';

  private credentials = new Credentials();

  private loginForm: FormGroup;

  private formSubmitted: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private errorDisplayService: ErrorDisplayService) {}

  public ngOnInit(): void {
    this.credentials.account = (localStorage.getItem('account') !== null) ?
                                localStorage.getItem('account') : '';

    if (this.authService.isAuthenticated) {
      this.router.navigate(['/dashboard']);
    }

    this.loginForm = this.fb.group({
      account: [this.credentials.account, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.formSubmitted = false;
  }

  public resetForm(): void {
    console.info('form not submitted');
    this.formSubmitted = false;
  }

  public login(creds: Credentials): void {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      console.info('hide popup');
      this.authService.login(this.loginForm.value);
    } else {
      this.errorDisplayService.display('Some entries are invalid');
    }
  }

}
