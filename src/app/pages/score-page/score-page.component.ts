import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Answer } from '../../subComponents/answer';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionManagerService } from 'src/app/services/question-manager.service';
import { Participation } from 'src/app/subComponents/participation';
import { mergeMap, tap } from 'rxjs';
import { Question } from 'src/app/subComponents/question';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent {
  registeredScores: number[] = [];

  quizQuestions:string[]=[];
  rightAnswers:string[]=[];

  participation: Participation={
    id: "0",
    playerName: "",
    score: 0,
    rate: 0,
    date: new Date()
  };

  userRank: number = 1;
  rateComment: string = "";

  statsLoaded: boolean = false;
  showAnswers: boolean = false;

  myTextStrokeRule = {
    textShadow:
      "0 2px 3px white, 0 -2px 4px CadetBlue",
    webkitTextStroke: "0.3px",
    webkitTextStrokeColor: "white",
  };

  readonly commentFirst="first";
  readonly commentGood="good";
  readonly commentMid="middle";
  readonly commentNoob="noob";

  constructor(
    private questionsService: QuestionManagerService,
    private playerService: PlayerService,
    private router: Router
  ) {
    this.questionsService.getQuestions()
    .pipe(
      mergeMap((questions:Question[])=>{
        return questions;
      }),
      tap((question:Question)=>{
        this.quizQuestions.push(question.text);
        for (var answer of question.possibleAnswers) {
          if (answer.isCorrect) {
            this.rightAnswers.push(answer.text);
          }
        }
      })
    )
    .subscribe();

    var currId = this.playerService.getCurrentId();
    this.playerService.getParticipations()
    .pipe(
      mergeMap((p: Participation[]) => {
        return p;        
      }),
      tap((p: Participation)=> {
        this.registeredScores.push(p.score)
        if (p.id === ''+currId) {
          this.participation = p;   
          if (this.quizQuestions.length!=0) {
            this.participation.rate = this.participation.score/this.quizQuestions.length;
          }
          console.log(this.participation.rate)
          this.initializeRateComment();
        }
      })
    )
    .subscribe();

    this.statsLoaded = true;
  }

  initializeRateComment() {
    if (this.participation.rate==1) {
      this.rateComment=this.commentFirst;
    }
    else if (this.participation.rate>2/3) {
      this.rateComment=this.commentGood;
    }
    else if (this.participation.rate>1/3) {
      this.rateComment=this.commentMid;
    }
    else {
      this.rateComment=this.commentNoob;
    }
  }

  successRate(value :number): number {
    if (!this.quizQuestions.length) { 
      return 0.0;
    }
    this.participation.rate = Math.round((value * 100) / this.quizQuestions.length);
    return this.participation.rate;
  };

  restartGame() {
    this.router.navigateByUrl("questionPage");
  };

  async toggleShowAnswers() {        
    this.showAnswers = !this.showAnswers;
  };

}
