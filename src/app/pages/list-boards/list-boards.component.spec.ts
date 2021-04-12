import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoardsComponent } from './list-boards.component';

describe('ListBoardsComponent', () => {
  let component: ListBoardsComponent;
  let fixture: ComponentFixture<ListBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
