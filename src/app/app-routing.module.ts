import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './subComponents/carousel/carousel.component';
import { CarouselSlideComponent } from './subComponents/carousel-slide/carousel-slide.component';
import { ScoreLoadAnimComponent } from './subComponents/score-load-anim/score-load-anim.component';
import { ScoreTableComponent } from './subComponents/score-table/score-table.component';
import { QuestionsManagerComponent } from './subComponents/questions-manager/questions-manager.component';
import { QuestionDisplayComponent } from './subComponents/question-display/question-display.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { NewQuizPageComponent } from './pages/new-quiz-page/new-quiz-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FilpCardComponent } from './subComponents/filp-card/filp-card.component';

const routes: Routes = [
  { path: 'aboutPage', component: AboutPageComponent },
  { path: 'newQuizPage', component: NewQuizPageComponent },
  { path: 'questionPage', component: QuestionsManagerComponent },
  { path: 'scorePage', component: ScorePageComponent },
  { path: '**', component: HomePageComponent }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AboutPageComponent,
    CarouselComponent,
    CarouselSlideComponent,
    FilpCardComponent,
    HomePageComponent,
    NewQuizPageComponent,
    ScorePageComponent,
    ScoreTableComponent,
    ScoreLoadAnimComponent,
    QuestionsManagerComponent,
    QuestionDisplayComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
