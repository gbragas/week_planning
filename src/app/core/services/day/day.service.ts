import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, shareReplay, switchMap } from 'rxjs';
import { Day } from '../../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  baseUrl =  'http://localhost:3000'

  private daysSubject = new BehaviorSubject<Observable<Day[] | null>>(of(null));

  days$ = this.daysSubject.asObservable().pipe(
    switchMap(day => day),
    shareReplay()
  )

  constructor(private http: HttpClient) {
    this.getAll();
   }
  
  getAll() {
    this.daysSubject.next(
      this.http.get<Day[]>(`${this.baseUrl}/days`)
    );
  }
}
