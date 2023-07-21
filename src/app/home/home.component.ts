import { Component } from '@angular/core';
import { DayService } from '../core/services/day/day.service';
import { EMPTY, catchError, combineLatest, ignoreElements, of, startWith } from 'rxjs';
import { Task } from '../core/models/task.model';
import { TaskService } from '../core/services/task/task.service';
import { Day } from '../core/models/day.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedDay!: Day;

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

  openCreateTask(day: Day) {
    this.selectedDay = day;
    this.creatingTask = true;
  }

  closeCreateTask() {
    this.creatingTask = false;
  }

  createTask(day: Day, task: Task) {
    this.taskService.post(day, task).subscribe({
      next: () => this.closeCreateTask(),
      error: () => console.log('Deu erro')

    })
  }
}
