// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ShoppingComponent } from './shopping.component';
// import { EntryComponent } from './components/entry/entry.component';
// import { ListComponent } from './components/list/list.component';
// import { StoreModule } from '@ngrx/store';
// import { FEATURE_NAME, reducer } from './reducer';

// @NgModule({
//   declarations: [ShoppingComponent, EntryComponent, ListComponent],
//   imports: [
//     CommonModule,
//     StoreModule.forFeature(FEATURE_NAME, reducer)
//   ],
//   exports: [ShoppingComponent]
// })
// export class ShoppingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducer } from './reducer';


@NgModule({
  declarations: [ShoppingComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducer)
  ],
  exports: [ShoppingComponent],
})
export class ShoppingModule { }
