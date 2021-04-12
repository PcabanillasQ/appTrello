import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { ListBoardsComponent } from './pages/list-boards/list-boards.component';
import { MyBoardComponent } from './pages/my-board/my-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBoardsComponent,
    MyBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
