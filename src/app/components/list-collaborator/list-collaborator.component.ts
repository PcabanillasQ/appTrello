import { Component, Input, OnInit, OnChanges, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.scss']

})
export class ListCollaboratorComponent implements OnInit {
  @Input('data') collaborators: any;
  @Input() showAdd: any;

  public data: any[];

  constructor() { }

  ngOnInit(): void {
  }


  addCollaborator() {
    console.log("Agregar colaborador");
  }
}
