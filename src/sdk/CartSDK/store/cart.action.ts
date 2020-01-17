import { Action } from "redux";

export const ADD_ITEM = "[CART] Add Item";
export const REMOVE_ITEM = "[CART] Remove Item";

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export class AddItem implements ActionWithPayload<string> {
  readonly type = ADD_ITEM;
  constructor(public readonly payload: string) {}
}

export class RemoveItem implements ActionWithPayload<string> {
  readonly type = REMOVE_ITEM;
  constructor(public readonly payload: string) {}
}

export type CartActions = AddItem | RemoveItem;


