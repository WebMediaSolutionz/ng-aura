import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../../shared/services/auth.service';
import { ConfigService } from '../../../shared/services/config.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-nav',
  templateUrl: 'nav.aura.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent {

  constructor(private authService: AuthService,
              private configService: ConfigService,
              private location: Location,
              private router: Router) {}

}
