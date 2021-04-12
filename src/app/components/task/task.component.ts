import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input('data') tasks: Task;
  @Output() sendTask: EventEmitter<Task> = new EventEmitter();


  constructor() {
    this.sendTask.emit(this.tasks)
  }

  ngOnInit(): void {
  }

}
