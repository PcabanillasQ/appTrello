import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Comment } from 'src/app/models/comment';
import { ListsService } from 'src/app/services/lists/lists.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {
  public task: Task;
  @Input("dataTask") editTask: Task;
  public comment: Comment;
  @Output() sendTask: EventEmitter<Task> = new EventEmitter();
  @Output() updateTask: EventEmitter<Task> = new EventEmitter();
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();


  constructor(private _listsSErvice: ListsService) {
    this.editTask = undefined;
    this.task = {
      id: undefined,
      title: undefined,
      description: undefined,
      commentary: undefined
    }
  }

  ngOnInit(): void {
    this.comment = {
      idUser: undefined,
      detail: undefined
    }

    // AQUI ASIGNO VALOR A EDITAR
    if (this.editTask !== undefined) {
      this.task = this.editTask;
    }
  }

  public createTask(e): void {
    if (this.comment.detail !== undefined) {
      this.task.commentary = [this.comment];
    } else {
      this.task.commentary = undefined;
    }
    this.sendTask.emit(this.task);
  }

  public closeModal(): void {
    this.closeForm.emit(false);
  }

}
