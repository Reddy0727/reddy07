import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, transform: 'translateX(-500px)' })),
      state('normal', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
          animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
          animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(-500px)' }))
      ])
  ])
  
]
})
export class PortfolioComponent {
  
  selectedCategory: string = 'all';
  constructor(private router: Router) { }
  services: any[] = [
    { id: 1, image: '/assets/software_develop.jpg', title: 'Software Development', content: 'SNV Software Solutions Private Limited delivers cost effective and reliable software development services, from total solution configuration, software development.', type: 'software-develop' },
    { id: 2, image: '/assets/mobile_application.jpg', title: 'Mobile Application', content: 'We design and develop websites and digital experiences that help our clients grow, innovate, and transform.', type: 'mobile-application' },
    { id: 3, image: '/assets/web_develop.webp', title: 'Web Development', content: 'We design and develop websites and  help our clients grow, innovate, and transform.', type: 'web-component' },
    { id: 4, image: '/assets/software-testing.avif', title: 'Software Testing', content: 'Software testing is a crucial of each software development project. As a software outsourcing company with more than 5 years.', type: 'testing' },
    { id: 5, image: '/assets/digital_marketing.jpg', title: 'Digital Marketing', content: 'Such as desktop computers, mobile phones and other digital media and platforms to promote products and services.', type: 'digital-market' },
    { id: 6, image: '/assets/quality_assurance.jpg', title: 'Quality Assurance', content: 'skills, processes, tools and techniques required for systematic testing, and offers these using a cost-effective..' },
    { id: 7, image: '/assets/it_staff.webp', title: 'IT Staff Augment', content: 'Our resources are experienced and certified in key technologies and work with you on-site or remote, depending on your requirement.' },
    { id: 8, image: 'https://cdn-images-1.medium.com/max/800/0*uU6qzeHcfpJBPIqk', title: 'Maintenance&support', content: 'Application maintenance and support services ensure that applications are highly available, reliable, and relevant to evolving business needs..' },
    

  ];
  goToDetails( id:Number) {
    let route: string;

    switch (id) {
      case 1:
        route = '/service/software-develop';
        break;
      case 2:
        route = '/service/mobile-application';
        break;
      case 3:
        route = '/service/web-component';
        break;
        case 4:
        route = '/service/testing';
        break;
      case 5:
        route = '/service/digital-market';
        break;
       case 7:
          route = '/service/it-staff';
          break;
          case 6:
          route = '/service/quality-assurance';
          break;
          case 7:
            route = '/service/support';
            break;
      default:
        route = '/service/support';
    }
    this.router.navigate([route]);
  }
  filterService:any=[...this.services]
  isFadingOut: boolean = false;
    cardClicked: number | null = null;

    displayCard(type: string) {
        this.isFadingOut = true;
        setTimeout(() => {
            if (type === 'all') {
                this.filterService = [...this.services];
            } else {
                this.filterService = this.services.filter((card) => {
                    return card.title.toLowerCase() === type.toLowerCase();
                });
            }
            this.isFadingOut = false; 
        }, ); 
    }

   
}
