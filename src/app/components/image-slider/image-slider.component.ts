import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s 1s', style({ opacity: 1 })),
      ]),
     
    ])
  ]
})
export class ImageSliderComponent implements OnInit{
  imageSlider!: NodeListOf<Element>;
  next!: HTMLElement | null;
  previous!: HTMLElement | null;
  currentSlide = 0;
  maxSlide!: number;
  intervalId: any;

  ngOnInit(): void {
    this.imageSlider = document.querySelectorAll(".carousel");
    this.next = document.querySelector(".nxt");
    this.previous = document.querySelector('.prev');
    this.maxSlide = this.imageSlider.length - 1;
    this.imageSlider.forEach((image, index) => {
      (image as HTMLElement).style.transform = `translateX(${(index) * 100}%)`;
    });
  setInterval(() => {
      this.next?.click();
    }, 20000);

    this.next?.addEventListener('click', () => {
      this.currentSlide = this.currentSlide === this.maxSlide ? this.currentSlide = 0: this.currentSlide + 1;
      this.updateSlider();
    });

    this.previous?.addEventListener('click', () => {
      this.currentSlide = this.currentSlide === 0 ? this.currentSlide = this.maxSlide: this.currentSlide - 1;
    this.updateSlider();
    });
  }
  updateSlider(): void {
    this.imageSlider.forEach((image, index) => {
      (image as HTMLElement).style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
      (image as HTMLElement).style.opacity = '0';
      setTimeout(() => {
        (image as HTMLElement).style.opacity = '1';
      }, 1000)
    });
  }

}
