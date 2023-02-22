import { Component, Input } from '@angular/core';
import { TASK } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task: Task = TASK[0];
}
