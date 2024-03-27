import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent {
  imageSource: string = '';
  heading: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); 
        const route = this.getActiveRoute(this.activatedRoute);
        this.updateContent(route);
      }
    });
  }
  updateContent(route: ActivatedRoute): void {
    switch (route.snapshot.routeConfig?.path) {
      case 'angular':
        this.imageSource = '/assets/angularbg.jpg';
        this.heading='angular'
        break;
      case 'mongo-db':
        this.imageSource = '/assets/MongoDB_bg.jpg';
        this.heading='mongodb'
        break;
      case 'react-js':
        this.imageSource = '/assets/react_bg.jpg'
        this.heading='reactjs'
        break;
      case 'sql':
        this.imageSource = '/assets/sql_bg.jpg';
        this.heading='sql'
        break;
      case 'java':
          this.imageSource = '/assets/bg_java.png';
          this.heading='java/J2EE'
          break;
      case 'microsoft-technologies':
          this.imageSource = '/assets/microsoft-bnr.jpg';
          this.heading='Microsoft Technologies'
          break;
      case 'python-development':
          this.imageSource = '/assets/python_bg.png';
          this.heading='Python Development'
          break;
      case 'saleforce':
          this.imageSource = '/assets/salesforce_bg.jpg';
          this.heading='Salesforce'
          break;
      case 'ionic':
            this.imageSource = '/assets/bg_iconic.jpg';
            this.heading='Ionic'
            break;
      default:
        this.imageSource = 'https://www.shutterstock.com/image-illustration/business-technology-internet-network-concept-600nw-2095472956.jpg'; 
        break;
    }
  }

  getActiveRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
