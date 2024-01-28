import { Component } from '@angular/core';

import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselSlideComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselSlides: CarouselSlideComponent[] = [];
  position: number = 0;
}
