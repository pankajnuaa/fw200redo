import { TodoListItem } from './model';
import { Observable, BehaviorSubject } from 'rxjs';

export class TodoDataService {
  private data: TodoListItem[] = [
    { description: 'Complete todo list', completed: true },
    { description: 'Complete Shopping List', completed: false },
    { description: 'Complete assignment', completed: false }
  ];

  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);   // not sure why we need this

  getTodoList(): Observable<TodoListItem[]> {
    const observable = this.todoListSubject.asObservable();
    return observable;
  }

  add(what: string) {
    this.data = [{ description: what, completed: false }, ...this.data];    // I do not now what is thiis doing
    this.todoListSubject.next(this.data);
  }

  markCompleted(item: TodoListItem) {
    for (const value of this.data) {
      if (value.description === item.description) {
        value.completed = true;
      }
    }
    this.todoListSubject.next(this.data);
  }
}
