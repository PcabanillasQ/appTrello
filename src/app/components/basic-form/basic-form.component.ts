import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Lists } from 'src/app/models/lists';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  user = false;
  public list: Lists;
  @Output() sendList: EventEmitter<Lists> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.list = {
      id: undefined,
      idBoard: undefined,
      title: "",
      tasks: []
    }
  }

  public createList(e?: any): void {
    this.sendList.emit(this.list)
    console.log(this.list);

  }

}
