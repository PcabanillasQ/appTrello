import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/app/models/board';
import { BoardService } from 'src/app/services/boards/board.service';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit {
  @Input('data') board: Board;
  @Output() dataBoard: EventEmitter<Board> = new EventEmitter<Board>();
  public dataCollaborator: any;
  public showBtnAdd;

  contacto = { nombres: "", apellidos: "" };
  urlAvatar = `https://ui-avatars.com/api/?background=random&color=fff&bold=true&size=40&name=${this.contacto.nombres}+${this.contacto.apellidos}`;

  constructor(
    private _router: Router,
    private _boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.dataCollaborator = this.board.collaborator;
    this.showBtnAdd = false;
  }

  goBoard(id: number) {
    this._router.navigate(['/myBoard', id]);
  }

}
