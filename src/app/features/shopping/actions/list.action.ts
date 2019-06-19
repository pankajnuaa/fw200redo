import { Action } from '@ngrx/store';
import { ShoppingListItem } from '../models';
let currentFakeId = 1;

export const REMOVED_ITEM = '[shipping] removed item';
export class ItemRemoved implements Action {
  readonly type: string = REMOVED_ITEM;
  constructor(public payload: ShoppingListItem) { }
}

export const ADD_ITEM = '[shopping] add item';
export class ItemAdded implements Action {
  readonly type: string = ADD_ITEM;
  payload: ShoppingListItem;
  constructor(public what: string) {
    this.payload = {
      id: 'TEMP' + (currentFakeId++).toString(),
      description: what
    };
  }

}

export type All =
  ItemAdded | ItemRemoved;

