import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBoardsComponent } from './pages/list-boards/list-boards.component';
import { MyBoardComponent } from './pages/my-board/my-board.component';


const routes: Routes = [
  { path: 'myBoard/:id', component: MyBoardComponent },
  { path: 'boards', component: ListBoardsComponent },
  { path: '**', component: ListBoardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
