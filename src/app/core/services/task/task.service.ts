import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, shareReplay } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Day } from '../../models/day.model';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl =  'http://localhost:3000'

  private taksSubject = new BehaviorSubject<Observable<Task[] | null>>(of(null));

  taks$ = this.taksSubject.asObservable().pipe(
    switchMap(taks => taks),
    shareReplay()
  )
  constructor(private http: HttpClient) { }

  getAll() {
    this.taksSubject.next(
      this.http.get<Task[]>(`${this.baseUrl}/tasks`)
    );
  }
}
