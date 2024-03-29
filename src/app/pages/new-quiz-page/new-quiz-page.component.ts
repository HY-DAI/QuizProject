import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { Participation } from 'src/app/subComponents/participation';

// import participationStorageService from "@/services/ParticipationStorageService";

@Component({
  selector: 'app-new-quiz-page',
  templateUrl: './new-quiz-page.component.html',
  styleUrls: ['./new-quiz-page.component.css']
})
export class NewQuizPageComponent {
  readonly CHAMP_NOM = "nom";

  participation: Participation = {
    id: "0",
    playerName: "Anonyme",
    score: 0,
    rate: 0,
    date: new Date()
  };

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
    this.playerService.getParticipations().subscribe(ps => {
      this.participation.id = ''+ps.length;
    });
  }

  playForm: FormGroup = new FormGroup({
    [this.CHAMP_NOM]: new FormControl(null,Validators.required)
  });

  launchNewQuiz() {
    this.participation.playerName = this.playForm.controls[this.CHAMP_NOM].value;
    this.playerService.setCurrentId(Number(this.participation.id));
    this.playerService.addParticipation(this.participation).subscribe();
    console.log("Launch new quiz with", this.participation.playerName);
    this.router.navigateByUrl("questionPage");
  };
}

