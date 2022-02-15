import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  db_name: string = 'todoDB'
  todos: any = []

  constructor() { }
  
  private initTodoDB(){
     //create todoDb if not exist
    if (localStorage.getItem(this.db_name) === null) {
      localStorage.setItem(this.db_name, JSON.stringify(this.todos))
    }
  }
  
  getTodos(){
    let td = localStorage.getItem(this.db_name)
    this.todos = td !== null ? JSON.parse(td) : [];
    return this.todos
  }

  saveNewTodo(newTodo: Todo){
    this.initTodoDB()
    this.todos.push(newTodo)
    this.updateTodoDB()
    return this.todos
  }

  editTodo(todo: Todo){
    const todoIndex = this.getTodoIndex(todo.id)
    this.todos.splice(todoIndex?.indexOfTodo, 1)
    this.todos.push(todo)
    this.updateTodoDB()
  }

  taskDone(todo: any){
    
    const todoIndex = this.getTodoIndex(todo.id)
    let todoUpdate = {
      id: todoIndex.todo.id,
      title: todoIndex.todo.title,
      task: todoIndex.todo.task,
      completed: true
    }
    
    this.todos.splice(todoIndex?.indexOfTodo, 1)
    this.todos.push(todoUpdate)
    this.updateTodoDB()
  }


  deleteTodo(id: any) {
    const todoIndex = this.getTodoIndex(id)
    this.todos.splice(todoIndex?.indexOfTodo, 1)
    this.updateTodoDB()
  }

  getTodoIndex(id:any){
    let indexOfTodo:any
    this.todos.forEach((todo: any, index: number) => {
      if (todo?.id === id) {
        indexOfTodo = {indexOfTodo:index, todo: todo}
      }
    });
    return indexOfTodo
  }

  updateTodoDB(){
    localStorage.setItem(this.db_name, JSON.stringify(this.todos))
  }



}
