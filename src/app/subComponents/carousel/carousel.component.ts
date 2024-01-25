import { Component } from '@angular/core';

import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselSlides: CarouselSlideComponent[] = [];
  position: number = 0;
}
