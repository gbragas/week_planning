import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteTasksComponent } from './execute-tasks.component';

describe('ExecuteTasksComponent', () => {
  let component: ExecuteTasksComponent;
  let fixture: ComponentFixture<ExecuteTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecuteTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
