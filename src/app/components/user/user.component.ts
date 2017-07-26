import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { WebService } from '../../shared/services/web.service';
import { ErrorDisplayService } from '../../shared/services/error-display.service';

// Classes
import { User } from '../../shared/custom-types/classes/user';

@Component({
  moduleId: module.id,
  selector: 'ss2-user',
  templateUrl: 'user.aura.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

  private formTitle: string = 'Profile Info';

  private editMode: boolean = false;

  private admin: boolean = false;

  private user: User;

  private isLoading: boolean = false;

  constructor(private webService: WebService,
              private errorDisplayService: ErrorDisplayService) {
    this.isLoading = true;
  }

  public ngOnInit(): void {
    this.webService.getUser().subscribe((res: User) => {
      this.user = res;

      this.isLoading = false;
      this.admin = (this.user.role !== undefined && this.user.role === 'admin');
    });
  }

  public post(): void {
    if (this.user.firstname.trim().length > 0 && this.user.lastname.trim().length > 0) {
      this.webService.saveUser(this.user).subscribe(() => {
        this.editMode = false;
        this.formTitle = 'Profile Info';
      });
    } else {
      this.errorDisplayService.display('Some entries are invalid');
    }
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;

    this.formTitle = (this.editMode) ? 'Edit Profile Info' : 'Profile Info';
  }

}
