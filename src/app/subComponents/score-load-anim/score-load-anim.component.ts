import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-load-anim',
  standalone: true,
  templateUrl: './score-load-anim.component.html',
  styleUrls: ['./score-load-anim.component.css']
})
export class ScoreLoadAnimComponent {
  @Input() userRate:number=0;
  
  scoreDisplay:string = "";
  circleStyle = {
    "--sratio": 0,
    animationPlayState: "paused",
  };

  ngOnInit() {
    this.circleStyle["--sratio"] = 460*(1-this.userRate);
    this.loadScore();  
  };

  
  loadScore() {        
    this.circleStyle.animationPlayState = "running";
    // Cas score sup a 0
    var counter = 0;
    var incr = 10;
    setInterval(() => {
      if (counter >= 20 * this.userRate) {
        incr = 1;
      }
      if (counter >= (100 * this.userRate) -1) {
        if (100 * this.userRate - counter > 0.5)
        this.scoreDisplay = counter+1 + "%";
        clearInterval(0);
      } else {
        counter += incr;
        this.scoreDisplay = counter + "%";
      }
    });
    this.scoreDisplay = this.userRate*100+"%";
  }
}

