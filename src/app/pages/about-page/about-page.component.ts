import { Component } from '@angular/core';
import { FilpCardComponent } from 'src/app/subComponents/filp-card/filp-card.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [FilpCardComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

}
