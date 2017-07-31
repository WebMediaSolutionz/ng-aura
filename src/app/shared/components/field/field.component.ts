import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Classes
import { Attributes } from '../../custom-types/classes/attributes';

@Component({
  moduleId: module.id,
  selector: 'ss2-field',
  templateUrl: 'field.aura.component.html',
  styleUrls: ['field.component.scss']
})
export class FieldComponent {

  @Input() protected group: FormGroup;

  @Input() protected attributes: Attributes = new Attributes();

}
