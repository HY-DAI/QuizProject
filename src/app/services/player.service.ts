import { Injectable } from '@angular/core';
import { Participation } from '../subComponents/participation';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
    return this.http.get<Participation[]>(this.URL_API)
    .pipe(
      catchError(this.handleError)
    );
  }

  getParticipationById(id: number) : Observable<Participation> {
    return this.http.get<Participation>(`${this.URL_API}/${id}`);
  }

  addParticipation(participation: Participation) {
    // this.participations.push(participation);
    return this.http.post(this.URL_API,participation)    
    .pipe(
      catchError(this.handleError)
    );
  }

  modifyParticipation(id:string, participation:Participation) {
    // this.participations[id] = participation;
    return this.http.put(`${this.URL_API}/${id}`,participation)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteParticipation(id:string) {
    // this.participations = this.participations.filter(p => p.id !== id);
    return this.http.delete<void>(`${this.URL_API}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
}
