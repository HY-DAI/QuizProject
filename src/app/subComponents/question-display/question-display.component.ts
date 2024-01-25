import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question-display<',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent {
  @Input() question:Question={
    text: '',
    title: '',
    image: '',
    position: 0,
    possibleAnswers: []
  };
  @Input() answerChosedId:number=-1;

  @Output() selectedAnswer:number = 0;
	@Output() emetteurAnswer= new EventEmitter<number>();

  myTextStrokeRule= {
    textShadow:
      "0 3px 3px white, 0 -3px 3px white, 3px 0 3px white, -3px 0 3px white",
    webkitTextStroke: "0.1px",
    webkitTextStrokeColor: "white",
  };

	emetChoosenAnswer(answerId: number) {
    this.emetteurAnswer.emit(answerId);
  }
}
  