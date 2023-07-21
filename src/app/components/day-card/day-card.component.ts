import { Component, Input } from '@angular/core';
import { Day } from 'src/app/core/models/day.model';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent {

  @Input() day!: Day;

}
