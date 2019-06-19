export const FEATURE_NAME = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ShoppingListItem } from '../models';

export interface State {
  list: fromList.State;
}

export const reducer = {
  list: fromList.reducer
};

// selectors
// 1. Feature Selector

export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);

// 2. A Selector for each " Branch " of the features state.
export const selectListBranch = createSelector(selectFeature, f => f.list);

// get select all and store in variable name selectAllShoppingItems
export const { selectAll: selectAllShoppingItems } = fromList.adapter.getSelectors(selectListBranch);

// 3 The selector for the actual components
export const selectShoppingItems =
  createSelector(selectAllShoppingItems, items => items as ShoppingListItem[]);
