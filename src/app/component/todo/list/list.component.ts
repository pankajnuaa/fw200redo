import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: TodoListItem[];
  @Output() markedCompleted = new EventEmitter<TodoListItem>();

  constructor() { }

  ngOnInit() {
  }

  markCompleted(item: TodoListItem) {
    this.markedCompleted.emit(item);
  }

}
