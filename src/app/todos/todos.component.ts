import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
  todos:Todo[]=[]
  localItem:any;
  ngOnInit(): void {
      
  }

  constructor(){
    this.localItem= localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[]
    }
  else{
    this.todos= JSON.parse(this.localItem);
  }
  }

  addTodo(todo:Todo){
      console.log(todo);
      this.todos.push(todo)
      localStorage.setItem("todos",JSON.stringify(this.todos))
  }


  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
