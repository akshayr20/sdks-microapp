export const ADD_ITEM = "[CART] Add Item";
export const REMOVE_ITEM = "[CART] Remove Item";

export const AddItem = function(payload: string) {
  return {
    type: ADD_ITEM,
    payload: payload
  };
};

export const RemoveItem = function(payload: string) {
  return {
    type: REMOVE_ITEM,
    payload: payload
  };
};
