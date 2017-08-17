import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from "./todo.component";
import { TodoHeaderComponent } from "./todo-header/todo-header.component";
import { TodoFooterComponent } from "./todo-footer/todo-footer.component";
import { TodoService } from "./todo.service";
import { routing } from "./todo.route";
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  providers:[TodoService]
})
export class TodoModule { }
