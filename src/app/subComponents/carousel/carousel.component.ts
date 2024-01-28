import { Component, ElementRef, Renderer2 } from '@angular/core';

import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselSlideComponent,NgbModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  
  
}
