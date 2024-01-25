import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-load-anim',
  templateUrl: './score-load-anim.component.html',
  styleUrls: ['./score-load-anim.component.css']
})
export class ScoreLoadAnimComponent {
  @Input() userScore:number = 0;
  @Input() nbr_questions:number = 1;
  
  scoreDisplay:string = "";
  circleStyle = {
    "--sratio": 0,
    animationPlayState: "paused",
  };

  ngOnInit() {    
    this.circleStyle["--sratio"] =
      472 * (1 + 0.05 - this.userScore / this.nbr_questions) - 1;
    if (this.userScore == 0) this.circleStyle["--sratio"] = 470;

    this.loadScore();
  };

  
  loadScore() {        
    this.circleStyle.animationPlayState = "running";
    // Cas score de 0
    if (this.userScore == 0) {
      this.scoreDisplay = "0%";
    }
    // Cas score sup a 0
    var counter = 0;
    var incr = (10 * this.userScore) / this.nbr_questions;
    setInterval(() => {
      if (counter >= (100 * this.userScore) / this.nbr_questions - 10) {
        incr = 1;
      }
      if (counter >= (100 * this.userScore) / this.nbr_questions -1) {
        if ((100 * this.userScore) / this.nbr_questions - counter > 0.5)
        this.scoreDisplay = counter+1 + "%";
        clearInterval(0);
      } else {
        counter += incr;
        this.scoreDisplay = counter + "%";
      }
    });
  }
}

