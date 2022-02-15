import { Todo } from './../../interface/todo';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @Output() saveNewTodo: EventEmitter<any> = new EventEmitter()
  
  id:number | undefined;
  completed: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.generateId()
  }

  generateId(){
    this.id = Math.floor((Math.random() * 100) + 1);
  }

  public onSubmit(inputData: Todo):void{
    const newTodo = {
      id: inputData.id,
      title: inputData.title,
      task: inputData.task,
      completed: false,
    };

    // const isEmpty = this.isEmpty(newTodo)
   // if(isEmpty === true){return alert `Title and task are required`}

    this.saveNewTodo.emit(newTodo)
  }

  isEmpty(obj: any) {
    return Object.keys(obj).length  === 0; 
}

}
