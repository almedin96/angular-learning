import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todos';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

inputTodo: string = '';
 todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "first todo",
         completed: false 
      },
      {
        content: "second todo",
         completed: true 
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos.map((i) => {
      this.todos = this.todos.filter((v, i) => i !== id);

    })
  }
  addTask(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
  }

}
