import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  add(item: HTMLInputElement) {
    // notify moma-papa
    this.itemAdded.emit(item.value);
    item.value = '';
    item.focus();
  }

}
