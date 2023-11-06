import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() 
  todo:Todo

  @Output()
  todoDelete: EventEmitter<Todo>= new EventEmitter();

  constructor(){
   this.todo={
    sno:1,
    title:'This is title 1',
    desc:'Description',
    active:true
   }
  }

  ngOnInit(): void {
      
  }

  deleteTodo(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("Method has been triggered!")
  }
}
