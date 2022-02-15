import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:any =[];
  @Output() deleteTask: EventEmitter<any> = new EventEmitter()
  @Output() editTask: EventEmitter<any> = new EventEmitter()
  @Output() taskDone: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  onEditSubmit(todo:Todo){
      this.editTask.emit(todo)
  }

  toggleDelete(id:number){
      this.deleteTask.emit(id)
  }

  toggleComplete(todo:any){
    this.taskDone.emit(todo)
  }

}
