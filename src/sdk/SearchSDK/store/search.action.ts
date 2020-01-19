export const SELECT_CITY = "[Select] City";
export const SELECT_PET = "[Select] Pet";

export const SelectCity = function(payload: string) {
  return {
    type: SELECT_CITY,
    payload: payload
  };
};

export const SelectPet = function(payload: string) {
  return {
    type: SELECT_PET,
    payload: payload
  };
};
