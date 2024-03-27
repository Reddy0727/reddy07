import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-software-develop',
  templateUrl: './software-develop.component.html',
  styleUrls: ['./software-develop.component.css','../../../shared.css']
})
export class SoftwareDevelopComponent {
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
