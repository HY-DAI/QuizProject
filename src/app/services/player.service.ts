import { Injectable } from '@angular/core';
import { Participation } from '../subComponents/participation';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private currentPlayerId:number;

  // private participations: Participation[] = [];
  
  constructor(private http: HttpClient) { 
    this.currentPlayerId=0;
  }

  URL_API:string = "http://localhost:3000/participations";

  getCurrentId() {
    return this.currentPlayerId;
  }
  setCurrentId(id:number) {
    this.currentPlayerId = id;
  }
  // getParticipationId(participation: Participation) {
  //   for (var id=0; id<this.participations.length; id++) {
  //     if (this.participations[id]===participation) {
  //       return id;
  //     }
  //   } // pb à traiter par les compos
  //   return -1;
  // }

  getParticipations() : Observable<Participation[]> {
    return this.http.get<Participation[]>(this.URL_API);
  }

  getParticipationById(id: number) : Observable<Participation> {
    return this.http.get<Participation>(`${this.URL_API}/${id}`);
  }

  addParticipation(participation: Participation) {
    // this.participations.push(participation);
    return this.http.post(this.URL_API,participation);
  }

  modifyParticipation(id:string, participation:Participation) {
    // this.participations[id] = participation;
    return this.http.put(`${this.URL_API}/${id}`,participation);
  }

  deleteParticipation(id:string) {
    // this.participations = this.participations.filter(p => p.id !== id);
    return this.http.delete<void>(`${this.URL_API}/${id}`);
  }
}
