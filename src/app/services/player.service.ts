import { Injectable } from '@angular/core';
import { Participation } from '../subComponents/participation';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerName = new BehaviorSubject<string>("Anonyme");
  private score = new BehaviorSubject<number>(0);
  private rate = new BehaviorSubject<number>(0);
  private date = new BehaviorSubject<Date>(new Date());

  private participations: Participation[] = [];
  
  constructor(private http: HttpClient) { }

  URL_API:string = "http://localhost:3000/participations";

  getParticipationId(participation: Participation) {
    for (var id=0; id<this.participations.length; id++) {
      if (this.participations[id]===participation) {
        return id;
      }
    } // à traiter par les compos
    return -1;
  }

  getParticipations() : Observable<Participation[]> {
    return this.http.get<Participation[]>(this.URL_API);
  }

  getParticipationsById(id: number) : Observable<Participation[]> {
    return this.http.get<Participation[]>(`${this.URL_API}/${id}`);
  }

  addParticipation(participation: Participation) {
    this.participations.push(participation);
    return this.http.post(this.URL_API,participation);
  }

  modifyParticipation(id:number, participation:Participation) {
    this.participations[id] = participation;
    return this.http.put(`${this.URL_API}/${id}`,participation);
  }
}
