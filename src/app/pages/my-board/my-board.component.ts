import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Board } from 'src/app/models/board';
import { Lists } from 'src/app/models/lists';
import { BoardService } from 'src/app/services/boards/board.service';
import { ListsService } from 'src/app/services/lists/lists.service';

@Component({
  selector: 'app-my-board',
  templateUrl: './my-board.component.html',
  styleUrls: ['./my-board.component.scss']
})

export class MyBoardComponent implements OnInit {
  public myBoard: Board;
  public idBoard: string;
  public dataCollaborator: any;
  public showBtnAdd: boolean;
  public totalList: number;
  public lists: any;
  public idListOfForm: number;
  public show: boolean;

  constructor(
    private _boardService: BoardService,
    private _listsService: ListsService,
    private _route: ActivatedRoute
  ) {
    this.myBoard = {
      id: undefined, idUser: undefined, collaborator: [], title: ""
    }
    this.loadBoards();
    this.loadLists();
    this.show = false;
  }

  ngOnInit() {
    this.idBoard = this._route.snapshot.paramMap.get('id');
  }

  public createTask(e: any): void {
    if (!e.task.title) return;
    this.idListOfForm = e.idList;
    const taskForm = e.task;
    if (taskForm.commentary !== undefined) {
      taskForm.commentary[0].idUser = this.myBoard.idUser;
    }

    const list = this.lists.filter(list => list.id === this.idListOfForm);

    if (taskForm.id === undefined) {
      taskForm.id = list[0].tasks.length + 1;
      taskForm.position = list[0].tasks.length + 1;
      list[0].tasks.push(taskForm);
    } else {
      list[0].tasks.splice(taskForm.id + 1, 1);
    }
    this._listsService.putList(this.idListOfForm, list[0]).subscribe(
      (data: Lists) => console.log(`%c SUCCESS: ${taskForm.title} de agrego corectamente`, `color:cyan; font-size: 12px;`),
      (error: Error) => console.log(`%c ERROR: ${error.message}`, `color:red; font-size: 12px;`)
    );
  }

  // get Data
  public loadBoards() {
    this._boardService.getBoard().subscribe(
      (data: Board[]) => {
        let booard = data.filter((board: Board) => board.id === +this.idBoard);
        this.myBoard = booard[0];
        this.dataCollaborator = this.myBoard.collaborator;
        this.showBtnAdd = true;
      },
      (error: Error) => console.log(`%c ERROR: ${error.message}`, `color:red; font-size: 12px;`)
    );
  }

  public loadLists() {
    this._listsService.getLists().subscribe(
      (data: Lists[]) => {
        this.totalList = data.length; //obtengo el total de listas, para colocar nuevo ID
        this.lists = data.filter((list: Lists) => list.idBoard === this.myBoard.id);
      },
      (error: Error) => console.log(`%c ERROR: ${error.message}`, `color:red; font-size: 12px;`)
    );
  }

  public createList(e: Lists): void {
    this.show = false; // close modal basicForm
    e.id = this.totalList + 1;
    e.idBoard = this.myBoard.id;
    this._listsService.postList(e).subscribe(
      (data: Lists) => {
        console.log(`%c SUC: "${data.title}" fue creado conexito`, `color:cyan; font-size:12px;`);
        this.lists = [...this.lists, data];
      },
      (error: Error) => console.log(`%c ERROR: ${error.message}`, `color:red; font-size: 12px;`)
    );
  }


}
