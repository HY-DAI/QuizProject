import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Question } from '../question';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-display<',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent {
  @Input() answerChosedId:number=-1;
  @Input() question:Question={
    id:0,
    text: '',
    title: '',
    image: '',
    position: 0,
    possibleAnswers: []
  };

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
  