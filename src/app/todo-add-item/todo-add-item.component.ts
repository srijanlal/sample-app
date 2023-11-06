import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.scss']
})
export class TodoAddItemComponent {
  title:string=""
  desc:string=""
  NoInput:string=""
  NoInputColor:string="red"

  @Output() todoAdd: EventEmitter<Todo>= new EventEmitter();


  onSubmit(){
    if(this.title===''){
      this.NoInput="No input found"
      this.NoInputColor='red'
    }
  else{
      this.NoInputColor='green'
      this.NoInput="todo addedd successfully"
    const todo={
      sno:1,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
    this.title=''
    this.desc=''
    console.log(this.todoAdd)
  }
  }
}
