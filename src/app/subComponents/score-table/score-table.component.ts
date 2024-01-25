import { Component } from '@angular/core';
import { Participation } from '../participation';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionManagerService } from 'src/app/services/question-manager.service';
import { mergeMap, tap } from 'rxjs';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent {
  registeredScores: Participation[] = [];
  position: number = 0;

  constructor(private playerService: PlayerService) {
    var currId = ''+this.playerService.getCurrentId(); 
    this.playerService.getParticipations()
      .pipe(
        mergeMap((ps:Participation[])=>{
          this.registeredScores = ps.sort((a, b) => b.rate.valueOf() - a.rate.valueOf());
          return ps;
        }),
        tap((p:Participation)=>{
          if (p.id==currId && p.rate==1) {
            this.registeredScores = [p].concat(this.registeredScores.filter(p2=>p2.id!=p.id));
          }
        })
      )
      .subscribe();
  }

}
