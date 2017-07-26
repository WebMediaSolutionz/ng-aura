import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ss2-footer',
  templateUrl: 'footer.aura.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() private company;

  private year;

  public ngOnInit() {
    let d = new Date();
    this.year = d.getFullYear();
  }

}
