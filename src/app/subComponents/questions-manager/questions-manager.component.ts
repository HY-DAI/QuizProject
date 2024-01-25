import { Component } from '@angular/core';
import { Question } from '../question';
import { QuestionManagerService } from 'src/app/services/question-manager.service';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-manager',
  templateUrl: './questions-manager.component.html',
  styleUrls: ['./questions-manager.component.css']
})
export class QuestionsManagerComponent {

  loading:boolean = true;
  totalNumberOfQuestion:number = 0;
  currentQuestionPosition:number = 0;

  username:string = "";
  answers:number[] = [];
  questions:Question[] = [];

  myStyle = {
    textAlign: "center",
    paddingBottom: "10em",
    backgroundSize: "100% auto",
    backgroundAttachment: "fixed, scroll, local",
    backgroundImage: "url(./assets/imgs/koi_fish.jpg)",
  };
  myTextStrokeRule = {
    textShadow: "0 4px 6px white, 0 -4px 6px CadetBlue, 4px 0 3px CadetBlue, -4px 0 3px CadetBlue",
    webkitTextStroke: "0.3px",
    webkitTextStrokeColor: "white",
  };

  readonly CHAMP_PREV = "prev";
  readonly CHAMP_NEXT = "next";

  ngOnInit() {
    console.log("QuestionsPage created");
  };

  
  constructor(
    private questionManagerService: QuestionManagerService,
    private playerService: PlayerService,
    private router: Router
  ) {
    // this.username = this.playerService.getPlayerName();
    this.questionManagerService.getQuestions().subscribe(questions=>{
      this.totalNumberOfQuestion = questions.length;
      this.questions = questions;
      this.answers = Array(questions.length).fill(-1);
    });
    this.loading=false;
  };

  loadRightQuestion(prevOrNext:string) {
    if (prevOrNext===this.CHAMP_PREV) {
      if (this.currentQuestionPosition > 0) {
        this.currentQuestionPosition--;
        // this.loadQuestionByPosition();
      }
    } else if (prevOrNext===this.CHAMP_NEXT) {
      if (this.currentQuestionPosition + 1 < this.totalNumberOfQuestion) {
        this.currentQuestionPosition++;
        // this.loadQuestionByPosition();
      }
      else this.endQuiz();
    }
    console.log(this.questions)
    console.log(this.answers)
  }

  async loadQuestionByPosition() {
    console.log("load Question By Position");
    // this.loading = false;
  };

  answerClickedHandler(answer:number) {
    console.log("answer Clicked Handler");
    this.answers[this.currentQuestionPosition] = answer;
    if (this.currentQuestionPosition+1 >= this.totalNumberOfQuestion) {
      return this.endQuiz();
    }
    this.currentQuestionPosition++;
    // this.loadQuestionByPosition();
  };

  endQuiz() {
    console.log("end Quiz");
    var score = this.questionManagerService.calculateScore(this.questions,this.answers);
    // this.playerService.setScore(score);
    // this.playerService.setDate();
    this.router.navigateByUrl('scorePage');
  };
}
