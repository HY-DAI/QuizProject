import { Component } from '@angular/core';
import { Participation } from '../participation';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionManagerService } from 'src/app/services/question-manager.service';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent {
  registeredScores:Participation[]=[];
  // questionsLength:number=0;

  position:number=0;

  constructor(
    // private questionService: QuestionManagerService,
    private playerService: PlayerService
  ) {
    // this.questionService.getQuestions().subscribe(questions => {
    //   this.questionsLength = questions.length;
    // });
    this.playerService.getParticipations().subscribe(participations => { 
      this.registeredScores = participations.sort((a, b) => a.date.valueOf() - b.date.valueOf()); 
    });
  }
  
}
