import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItem } from './model';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoDataService) { }
  items$: Observable<TodoListItem[]>;  // believe this is observe the todolistitem

  ngOnInit() {
    this.items$ = this.service.getTodoList();
  }

  add(what: string) {
    this.service.add(what);
  }

  markComplete(item: TodoListItem) {
    this.service.markCompleted(item);
  }

}
