import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarouselComponent } from './subComponents/carousel/carousel.component';
import { CarouselSlideComponent } from './subComponents/carousel-slide/carousel-slide.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { ScoreLoadAnimComponent } from './subComponents/score-load-anim/score-load-anim.component';
import { ScoreTableComponent } from './subComponents/score-table/score-table.component';
import { NavBarComponent } from './subComponents/nav-bar/nav-bar.component';
import { NewQuizPageComponent } from './pages/new-quiz-page/new-quiz-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuestionsManagerComponent } from './subComponents/questions-manager/questions-manager.component';
import { QuestionDisplayComponent } from './subComponents/question-display/question-display.component';

import { ReactiveFormsModule } from '@angular/forms';
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
    AppComponent,
    CarouselComponent,
    CarouselSlideComponent,
    ScoreTableComponent,
    ScoreLoadAnimComponent,
    ScorePageComponent,
    NavBarComponent,
    NewQuizPageComponent,
    HomePageComponent,
    QuestionsManagerComponent,
    QuestionDisplayComponent,
    AboutPageComponent,
    FilpCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


