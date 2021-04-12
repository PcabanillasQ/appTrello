import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lists } from 'src/app/models/lists';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input('data') list: Lists;
  @Output() dataListForm: EventEmitter<any> = new EventEmitter();
  public editTask: Task;
  public showFormTaks: boolean;

  constructor() {
    this.showFormTaks = false;
  }

  ngOnInit(): void { }

  public createTask(e) {
    this.showFormTaks = false;
    this.dataListForm.emit({ idList: this.list.id, task: e });
  }

  public updateTask(e) {
    this.showFormTaks = true;
    this.editTask = e;
  }

  public closeForm(e) {
    this.showFormTaks = e;
  }

}
