import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment-task',
  templateUrl: './comment-task.component.html',
  styleUrls: ['./comment-task.component.scss']
})
export class CommentTaskComponent implements OnInit {
  @Input('data') commentary: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
