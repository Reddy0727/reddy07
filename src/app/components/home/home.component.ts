import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(-100px)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100px)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
    ]),
    trigger('flipAnimation', [
      transition('false => true', [
        style({ transform: 'rotateY(0deg)' }),
        animate('500ms ease-out', style({ transform: 'rotateY(180deg)' }))
      ]),
      transition('true => false', [
        style({ transform: 'rotateY(180deg)' }),
        animate('500ms ease-out', style({ transform: 'rotateY(0deg)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) { }

  services: any[] = [
    { id: 1, image: '/assets/software_develop.jpg', title: 'Software Development', content: 'SNV Software Solutions Private Limited delivers cost effective and reliable software development services, from total solution configuration, software development.', type: 'software-develop' },
    { id: 2, image: '/assets/mobile_application.jpg', title: 'Mobile Application', content: 'We design and develop websites and digital experiences that help our clients grow, innovate, and transform.', type: 'mobile-application' },
    { id: 3, image: '/assets/web_develop.webp', title: 'Web Development', content: 'We design and develop websites and  help our clients grow, innovate, and transform.', type: 'web-component' },
    { id: 4, image: '/assets/software-testing.avif', title: 'Software Testing', content: 'Software testing is a crucial of each software development project. As a software outsourcing company with more than 5 years.', type: 'testing' },
    { id: 5, image: '/assets/digital_marketing.jpg', title: 'Digital Marketing', content: 'Such as desktop computers, mobile phones and other digital media and platforms to promote products and services.', type: 'digital-market' },
    { id: 6, image: '/assets/quality_assurance.jpg', title: 'Quality Assurance', content: 'skills, processes, tools and techniques required for systematic testing, and offers these using a cost-effective..' },
    { id: 7, image: '/assets/it_staff.webp', title: 'IT Staff Augment', content: 'Our resources are experienced and certified in key technologies and work with you on-site or remote, depending on your requirement.' },
    { id: 8, image: 'https://cdn-images-1.medium.com/max/800/0*uU6qzeHcfpJBPIqk', title: 'Maintenance&Support', content: 'Application maintenance and support services ensure that applications are highly available, reliable, and relevant to evolving business needs..'}

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
        case 6:
          route ='/service/quality-assurance';
          break;
          case 7:
          route ='/service/it-staff';
          break;
          case 8:
          route ='/service/support';
          break;
      default:
        route = '/service/web-component';
        
    }
    this.router.navigate([route]);
  }
  images: string[] = [
    '/assets/react-icon.png',
    '/assets/iconic_icon.png',
    '/assets/angular-icon.webp',
    '/assets/sql_icon.avif',
    '/assets/java_icon.webp',
    '/assets/mongodb-icon.png',
    '/assets/salesforce-icon.png',
    '/assets/python-icon.png'

  ];
  currentIndex: number = 0;
  flippedStates: boolean[] = Array(this.images.length).fill(false);
  getVisibleImages(): string[] {
    return this.images.slice(this.currentIndex, this.currentIndex + 3);
  }


  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
   if(window.innerWidth<900){
    if (this.currentIndex < this.images.length - 2) {
      this.currentIndex++;
    }
   }
   else if(window.innerWidth<500) {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
   }
   else{
    if (this.currentIndex < this.images.length - 3) {
      this.currentIndex++;
    }
   }
  }

  flipImage(index: number) {
    this.flippedStates[index] = !this.flippedStates[index];
  }
  resetFlip(index: number) {
    this.flippedStates[index] = false;
  }
  ngOnInit() {
    // Start the auto-slider
    this.startAutoSlider();
  }

  startAutoSlider() {
    this.interval$ = interval(5000).subscribe(() => {
      this.next();
    });
  }
  image: string[] = [
    'https://www.clobdata.com/images/slides/v1-image-1.png',
    'https://www.clobdata.com/images/slides/v1-image-2.png',
    'https://www.clobdata.com/images/slides/v1-image-3.png'

  ];
  currentIndexs = 0;
  interval$: any;
  stopAutoSlider() {
    // Stop the auto-slider
    this.interval$.unsubscribe();
  }

  nxt() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
