import { Component } from '@angular/core';

import { Answer } from '../../subComponents/answer';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionManagerService } from 'src/app/services/question-manager.service';

// import quizApiService from "@/services/QuizApiService";
// import participationStorageService from "@/services/ParticipationStorageService";

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent {
  registeredScores: number[] = [];
  registeredAnswers: Answer[] = [];
  questionText: string = "";
  lenQuestions: number = 0;

  userName: string = "";
  userScore: number = 0;
  userRank: number = 1;
  rate: number = 0;
  statsLoaded: boolean = false;
  showAnswers: boolean = false;
  myTextStrokeRule = {
    textShadow:
      "0 2px 3px white, 0 -2px 4px CadetBlue",
    webkitTextStroke: "0.3px",
    webkitTextStrokeColor: "white",
  };

  constructor(
    private questionsService: QuestionManagerService,
    private playerService: PlayerService
  ) {
    this.lenQuestions = this.questionsService.getQuestions.length;

    // this.userName = this.playerService.getPlayerName();
    // this.userScore = this.playerService.getScore();
    if (this.lenQuestions!=0) {
      this.rate = this.userScore/this.lenQuestions;
    }
  }

  successRate(value :number): number {
    if (!this.lenQuestions) { 
      return 0.0;
    }
    this.rate = Math.round((value * 100) / this.lenQuestions);
    return this.rate;
  };

  scoreStats() {
    // this.rate = this.successRate(this.userScore);
    // for (var scoreId in this.registeredScores) {
    //   if (this.registeredScores[scoreId].reussite > this.rate)
    //     this.userRank ++;   
    // } 
  };

  restartGame() {
    // this.$router.push("/questions");
  };

  async toggleShowAnswers() {        
    this.showAnswers = !this.showAnswers;
  };

}
