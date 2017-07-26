import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../shared/services/auth.service';

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

  constructor(private authService: AuthService,
              private router: Router) {}

  public ngOnInit(): void {
    this.credentials.account = (localStorage.getItem('account') !== null) ?
                                localStorage.getItem('account') : '';

    if (this.authService.isAuthenticated) {
      this.router.navigate(['/dashboard']);
    }
  }

  public login(): void {
    this.authService.login(this.credentials);
  }

}
