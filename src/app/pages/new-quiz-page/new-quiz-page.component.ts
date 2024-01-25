import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

// import participationStorageService from "@/services/ParticipationStorageService";

@Component({
  selector: 'app-new-quiz-page',
  templateUrl: './new-quiz-page.component.html',
  styleUrls: ['./new-quiz-page.component.css']
})
export class NewQuizPageComponent {
  username: string = "";

  myStyle = {
    textAlign: "center",
    paddingBottom: "20em",
    backgroundSize: "1550px auto",
    backgroundAttachment: "fixed, scroll, local",
    backgroundImage: "url('./assets/imgs/street_market.jpg')"
  };
  myTextStrokeRule = {
    textShadow: "0 4px 3px white, 0 -4px 3px white, 4px 0 3px white, -4px 0 3px white",
    webkitTextStroke: "0.1px",
    webkitTextStrokeColor: "white",
  };

  constructor(
    private playerService:PlayerService,
    private router: Router
  ) { 
    // this.username = this.playerService.getPlayerName();
  }

  launchNewQuiz() {
    console.log("Launch new quiz with", this.username);
    if(this.username)
      // this.playerService.setPlayerName(this.username);
    this.router.navigateByUrl("questionPage");
  };
}

