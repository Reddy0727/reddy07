import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  emailUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.emailUrl = this.sanitizer.bypassSecurityTrustUrl('mailto:info@snvsoftwaresolutions.onmicrosoft.com');
  }
}
