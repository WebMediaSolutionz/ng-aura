import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { WebService } from '../../../../shared/services/web.service';
import { ErrorDisplayService } from '../../../../shared/services/error-display.service';

// Classes
import { User } from '../../../../shared/custom-types/classes/user';

@Component({
  moduleId: module.id,
  selector: 'ss2-general',
  templateUrl: 'general.aura.component.html',
  styleUrls: ['general.component.scss']
})
export class GeneralComponent implements OnInit {

  private title: string = 'general';

  private user: User = new User();

  private password: any = {
    current: '',
    new: '',
    confirmNew: ''
  };

  private passwordsMatch: boolean = true;

  constructor(private errorDisplayService: ErrorDisplayService,
              private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getUser().subscribe((res: User) => {
      this.user = res;
    });
  }

  public save(): void {
    if (this.password.current !== this.user.password) {
      this.errorDisplayService.display('Email or Password incorrect');
    } else if (this.password.new !== this.password.confirmNew) {
      this.errorDisplayService.display('Some entries are invalid');
    } else {
      this.user.password = this.password.new;

      this.webService
          .saveUser(this.user)
          .subscribe(() => {
            this._clearForm();
          });
    }
  }

  public mismatchedFields(): void {
    this.passwordsMatch = (this.password.new === this.password.confirmNew );
  }

  private _clearForm(): void {
    this.password.current = '';
    this.password.new = '';
    this.password.confirmNew = '';
  }

}
