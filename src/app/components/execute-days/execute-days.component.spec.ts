import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteDaysComponent } from './execute-days.component';

describe('ExecuteDaysComponent', () => {
  let component: ExecuteDaysComponent;
  let fixture: ComponentFixture<ExecuteDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecuteDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
