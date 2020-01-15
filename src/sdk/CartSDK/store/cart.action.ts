import { Action } from "redux";

export const ADD_ITEM = "[CART] Add Item";
export const REMOVE_ITEM = "[CART] Remove Item";

class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: string) {}
}

class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: string) {}
}

export const AddItem$ = (payload: string): any => async (
  dispatch: Function
) => {
  const response = await exampleAPI(payload);
  dispatch(new AddItem(response));
};

export const RemoveItem$ = (payload: string): any => async (
  dispatch: Function
) => {
  const response = await exampleAPI(payload);
  dispatch(new RemoveItem(response));
};

export type CartActions = AddItem | RemoveItem;

/* FAKE API CALL */

function exampleAPI(payload: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(payload);
    }, 500);
  });
}
