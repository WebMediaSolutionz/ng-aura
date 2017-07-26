import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'ss2-pulse-logo',
  templateUrl: 'pulse-logo.aura.component.html',
  styleUrls: ['pulse-logo.component.scss']
})
export class PulseLogoComponent {

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'pulse',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pulse.svg')
    );
  }

}
