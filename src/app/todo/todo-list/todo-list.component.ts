import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from '../../domain/entries';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  _todos: Todo[] = [];

  @Input()
  set todos(todos:Todo[]){
    this._todos = [...todos];
  }
  get todos() {
    return this._todos;
  }

  @Output()
  onToggleTodo = new EventEmitter<Todo>();

  @Output()
  onRemoveTodo = new EventEmitter<Todo>();

  @Output()
  onToggleAll = new EventEmitter<boolean>();



  constructor() { }

  ngOnInit() {
  }
  onRemoveTriggered(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }
  onToggleTriggered(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }
  onToggleAllTriggered(){
    this.onToggleAll.emit(true);
  }
}
