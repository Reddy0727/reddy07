import { Component, EventEmitter, Output,ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent {
  @Output() linkClicked = new EventEmitter<void>();

  // Emit the event when a link is clicked
  onLinkClicked() {
    this.linkClicked.emit();
  }
  dropdownOpen: boolean = false;
  dropdownOpened: boolean = false;

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownOpened = false;
  }
  toggleDropdowns(): void {
    this.dropdownOpened = !this.dropdownOpened;
    this.dropdownOpen = false;
  }
  @ViewChild('sidebar')
  sidebar!: ElementRef;
  items: string[] = ['Home', 'About', 'Services', 'Contact','yuu','ftugyg','ddsd','dwdwd','dwdd'];

  constructor() {}

  ngAfterViewInit(): void {
    const sidebarEl = this.sidebar.nativeElement;
    sidebarEl.style.overflowY = 'auto'; // Enable vertical scrollbar
    sidebarEl.style.height = '100%'; // Set full height of sidebar
  }
 
}
