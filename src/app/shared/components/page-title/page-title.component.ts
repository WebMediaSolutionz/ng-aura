import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ss2-page-title',
  templateUrl: 'page-title.aura.component.html',
  styleUrls: ['page-title.component.scss']
})
export class PageTitleComponent {

  @Input() private pageTitle: string;

}
