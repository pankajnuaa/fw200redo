import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListItem } from '../../models';
import { State } from '../../reducer/list.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: ShoppingListItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
