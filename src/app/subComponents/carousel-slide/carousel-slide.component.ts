import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.css']
})
export class CarouselSlideComponent {
    @Input() backgroundImageURL:String='';
    @Input() title:string='';
    @Input() imageURL:string='';
    @Input() licenseURL:string='';
    @Input() description:string='';
}
