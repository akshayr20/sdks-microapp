import { AddItem, RemoveItem } from "./cart.action";

export const AddItem$ = (payload: string): any => async (
  dispatch: Function
) => {
  const response = await exampleAPI(payload);
  dispatch(AddItem(response));
};

export const RemoveItem$ = (payload: string): any => async (
  dispatch: Function
) => {
  const response = await exampleAPI(payload);
  dispatch(RemoveItem(response));
};

/* FAKE API CALL */

function exampleAPI(payload: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(payload);
    }, 10);
  });
}
