import { Component, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/board';
import { User } from 'src/app/models/user';
import { BoardService } from 'src/app/services/boards/board.service';

@Component({
  selector: 'app-list-boards',
  templateUrl: './list-boards.component.html',
  styleUrls: ['./list-boards.component.scss']
})
export class ListBoardsComponent implements OnInit {
  public allBoards: Board[];
  public boards: Board[];
  public otherBoards: Board[];
  protected user: User;

  constructor(private _boardService: BoardService) {

    this.user = {
      id: 1,
      name: "Pabel",
      lastName: "Cabanillas",
      email: "Pabel17@gmail.com"
    }
    this.boards = []
    this.otherBoards = []
    this.loadBoards();
  }

  ngOnInit(): void { }

  loadBoards() {
    this._boardService.getBoard().subscribe(
      (data: Board[]) => {
        data.forEach(
          board => {
            if (board.idUser === this.user.id) {
              this.boards = [...this.boards, board];
            } else {
              this.otherBoards = [...this.otherBoards, board];
            }
          }
        );
      },
      (error: Error) => console.log(`%c ERROR: ${error.message}`, `color:red; font-size: 12px;`)
    );
  }

}
