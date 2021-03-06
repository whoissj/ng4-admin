import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Rx";
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string;

  @Input() placeholder: string;

  @Output()
  textChanges = new EventEmitter<string>();

  @Output()
  onEnterUp = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement,'keyup')
      .map(()=>this.inputValue)
      .debounceTime(200)
      .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));

  }

  ngOnInit() {
  }
  enterUp(){
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }
}
