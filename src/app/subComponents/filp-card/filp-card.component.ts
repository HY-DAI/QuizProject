import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filp-card',
  standalone: true,
  templateUrl: './filp-card.component.html',
  styleUrls: ['./filp-card.component.css']
})
export class FilpCardComponent {
  @Input() name:string="";
  @Input() presentation:string="";
  @Input() hobby:string="";
  @Input() backgroundImageURL:string="";
  @Input() linkedinURL:string="";
  @Input() imageURL:string="";
  @Input() licenseURL:string="";
 
}
