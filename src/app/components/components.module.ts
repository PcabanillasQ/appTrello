import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardBoardComponent } from './card-board/card-board.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListCollaboratorComponent } from './list-collaborator/list-collaborator.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { CommentTaskComponent } from './comment-task/comment-task.component';

@NgModule({
  declarations: [
    CardBoardComponent,
    HeaderComponent,
    TaskComponent,
    ListCollaboratorComponent,
    BasicFormComponent,
    TaskListComponent,
    FormTaskComponent,
    CommentTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardBoardComponent,
    HeaderComponent,
    TaskComponent,
    ListCollaboratorComponent,
    BasicFormComponent,
    TaskListComponent,
    FormTaskComponent,
    CommentTaskComponent
  ]
})
export class ComponentsModule { }
