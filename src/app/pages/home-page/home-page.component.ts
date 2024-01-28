import { Component } from '@angular/core';
import { CarouselComponent } from 'src/app/subComponents/carousel/carousel.component';
import { ScoreTableComponent } from 'src/app/subComponents/score-table/score-table.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CarouselComponent,ScoreTableComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}
