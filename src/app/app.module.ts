import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoItemComponent } from './pages/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { NewTodoComponent } from './pages/new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodosComponent,
    TodoItemComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
