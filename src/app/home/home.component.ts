import { Component } from '@angular/core';
import { DayService } from '../core/services/day/day.service';
import { EMPTY, catchError, combineLatest, ignoreElements, of, startWith } from 'rxjs';
import { Task } from '../core/models/task.model';
import { TaskService } from '../core/services/task/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  creatingTask: boolean = false;

  days$ = this.dayService.days$.pipe(
    startWith(null),
    catchError(() => EMPTY)
  )

  daysError$ = this.dayService.days$.pipe(
    ignoreElements(),
    startWith(null),
    catchError((error) => of(error))
  )

  vm$ = combineLatest({
    days: this.days$,
    daysError: this.daysError$
  })

  constructor(private dayService: DayService, private taskService: TaskService) { }

  changeCreatingTask() {
    this.creatingTask = !this.creatingTask
  }

  createTask(task: Task) {

  }
}
