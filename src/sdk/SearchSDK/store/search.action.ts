import { Action } from "redux";

export const SELECT_CITY = "[Select] City";
export const SELECT_PET = "[Select] Pet";

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export class SelectCity implements ActionWithPayload<string> {
  readonly type = SELECT_CITY;
  constructor(public readonly payload: string) {}
}

export class SelectPet implements ActionWithPayload<string> {
  readonly type = SELECT_PET;
  constructor(public readonly payload: string) {}
}

export type SearchActions = SelectCity | SelectPet;
