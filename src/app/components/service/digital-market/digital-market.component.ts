import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app- ',
  templateUrl: './digital-market.component.html',
  styleUrls: ['./digital-market.component.css','../../../shared.css']
})
export class DigitalMarketComponent {
  constructor(private route: ActivatedRoute) {
    const routeData = this.route.snapshot.data;
    if (routeData && routeData['route']) {
      this.updateContent(routeData['route']);
    }
  }
  updateContent(route: string): void {
    // Implement content update logic specific to the home page
  }
}
