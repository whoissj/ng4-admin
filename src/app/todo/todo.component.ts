import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";
import { Todo } from '../domain/entries';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc = '';

  constructor(private todoService: TodoService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.getTodos();
    this.route.params.forEach((params:Params)=>{
      let filter = params['filter'];
      this.filterTodos(filter);
    })
  }
  filterTodos(filter: string): void{
    this.todoService
      .filterTodos(filter)
      .then(todos => this.todos = [...todos]);
  }
  onTextChanges(e){
    this.desc = e;
  }
  addTodo(){
    if(this.desc){
      this.todoService.addTodo(this.desc)
        .then(todo => {
          this.todos = [...this.todos,todo];
          this.desc = '';
      });
    }
  }
  toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todoService
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0,i),
          t,
          ...this.todos.slice(i+1)
        ];
        return null;
      });
  }
  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todoService
      .deleteTodoById(todo.id)
      .then(()=> {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
        return null;
      });
  }
  getTodos(): void {
    this.todoService
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }
  toggleAll(){
    Promise.all(this.todos.map(todo => this.toggleTodo(todo)));
  }
  clearCompleted(){
    const completed_todos = this.todos.filter(todo => todo.completed === true);
    const active_todos = this.todos.filter(todo => todo.completed === false);
    Promise.all(completed_todos.map(todo => this.todoService.deleteTodoById(todo.id)))
      .then(() => this.todos = [...active_todos]);
  }
}
