import { Component} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
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
      case 'software-develop':
        this.imageSource = '/assets/software.avif';
        this.heading='software development'
        break;
      case 'testing':
        this.imageSource = '/assets/bg_testing.jpg';
        this.heading='software testing'
        break;
      case 'mobile-application':
        this.imageSource = '/assets/mob_app.jpg'
        this.heading='Mobile application'
        break;
      case 'digital-market':
        this.imageSource = '/assets/digital-marketing.webp';
        this.heading='Digital marketing'
        break;
      case 'web-component':
          this.imageSource = '/assets/web_development.webp';
          this.heading='Web Development'
          break;
      case 'it-staff':
            this.imageSource = '/assets/staff_IT.jpg';
            this.heading='IT Staff Augment'
            break;
      case 'quality-assurance':
              this.imageSource = '/assets/quality_ass.jpg';
              this.heading='quality assurance'
              break;
      case 'support':
        this.imageSource='https://systems-plus.com/wp-content/uploads/2023/06/Avina_Banner.png';
        this.heading='Maintenance&support'
        break;
      
      default:
        this.imageSource = '/assets/services.avif';
        this.heading =''
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


