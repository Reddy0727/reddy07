import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      state('hidden', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('hidden <=> visible', animate('800ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent {
  @ViewChild('closeButton') closeButton!: ElementRef;
  constructor(private route:Router) {
    route.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
           this.closeButton.nativeElement.click();
      }
    })
  }
}
