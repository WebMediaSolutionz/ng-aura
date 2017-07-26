import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ss2-page-not-found',
  templateUrl: 'page-not-found.aura.component.html',
  styleUrls: ['page-not-found.component.scss']
})
export class PageNotFoundComponent {

  private errorMsg: string = 'page not found';

  private errorCode: number = 404;

  private title: string = `- ${this.errorCode} -`;

  private landingPage: any = {
    path: '/dashboard',
    page: 'dashboard'
  };

}
