import { SelectCity, SelectPet } from "./search.action";

export const SelectCity$ = (payload: string): any => async (
  dispatch: Function
) => {
  const response = await exampleAPI(payload);
  dispatch(SelectCity(response));
};

export const SelectPet$ = (payload: string): any => async (
  dispatch: Function
) => {
  const response = await exampleAPI(payload);
  dispatch(SelectPet(response));
};

/* FAKE API CALL */

function exampleAPI(payload: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(payload);
    }, 10);
  });
}
