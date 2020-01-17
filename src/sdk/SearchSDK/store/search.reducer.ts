import * as SearchActions from "./search.action";

interface Action {
  type: string;
  payload?: any;
}

interface Search {
  selectedCity: string;
  selectedPet: string;
}

const SearchState: Search = {
  selectedCity: "",
  selectedPet: ""
};

/*  
EXAMPLE IF STATE IS AN OBJECT 
return {
  ...state,
  DEEP_CLONES STATES
  // and then override the property that needs to be updated
  todos: [...state.todos, { label: 'Build Redux,', complete: false }],
};
 */

export const Reducer = (INITIAL_STATE = SearchState) => {
  return (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
      case SearchActions.SELECT_CITY:
        return { ...state, selectedCity: action.payload };
      case SearchActions.SELECT_PET:
        return { ...state, selectedPet: action.payload };
      default:
        return state;
    }
  };
};
