import { Injectable } from '@angular/core';
import { Participation } from '../subComponents/participation';
import { Observable } from 'rxjs';
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

  // URL_API:string = "http://localhost:3000/participations";
  URL_API:string = "https://my-json-server.typicode.com/HY-DAI/QuizProjectJsonServer/participations";
  

  getCurrentId() {
    return this.currentPlayerId;
  }
  setCurrentId(id:number) {
    this.currentPlayerId = id;
  }

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
