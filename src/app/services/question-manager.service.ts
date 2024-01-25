import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from '../subComponents/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionManagerService {

  constructor(private http: HttpClient) { }

  URL_API:string = "http://localhost:3000/questions";

  getQuestions() : Observable<Question[]> {
    return this.http.get<Question[]>(this.URL_API);
  }

  calculateScore(questions:Question[],answers:number[]) : number {
    var score = 0;  
    for (let idx = 0; idx < questions.length; idx++) {
      if (answers[idx]!==-1 && questions[idx].possibleAnswers[answers[idx]]) {
        score++;
      }
    }
    return score;
  }

}
