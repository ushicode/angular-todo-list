import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
 
  todos:any = []
  addNewTodo: boolean = false
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
   this.getTodos()
    
  }

  public getTodos(){
    this.todos = this._todoService.getTodos() 
    this.addNewTodo = false
  }

  public setNewTodo(){
    this.addNewTodo = true
  }

  saveNewTodo(newTodo: Todo){
     this.todos = this._todoService.saveNewTodo(newTodo)
     this.getTodos()
  }

  editTodo(todo:any){
    this.todos = this._todoService.editTodo(todo)
    this.getTodos()
  }

  taskDone(todo:any){
    this._todoService.taskDone(todo)
    this.getTodos()
  }

  deleteTodo(id:any){
     this._todoService.deleteTodo(id)
     this.getTodos()
  }
  

}
