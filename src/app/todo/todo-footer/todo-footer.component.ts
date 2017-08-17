import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  @Input()
  itemCount: number;

  constructor() { }

  ngOnInit() {
  }
  @Output() onClear = new EventEmitter<boolean>();
  onClick(){
    this.onClear.emit(true);
  }
}
