import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Day } from 'src/app/core/models/day.model';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-execute-tasks',
  templateUrl: './execute-tasks.component.html',
  styleUrls: ['./execute-tasks.component.scss']
})
export class ExecuteTasksComponent {

  @Input() day!: Day;

  @Output() newTask = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: new FormControl(null),
      name: new FormControl(''),
      description: new FormControl(''),
      createdAt: new FormControl(null),
    });
  }

  createtask() {
    this.form.value.createdAt = new Date();
    this.form.value.id = new Date().getTime();
    this.newTask.emit(this.form.value);
  }

  cancelTask() {
    this.cancel.emit()
  }
}
