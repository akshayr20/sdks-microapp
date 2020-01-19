import { store } from "store-microapp";
import { Reducer } from "./store/search.reducer";
import * as asSearchEffects from "./store/search.effects";

declare global {
  interface Window {
    searchSDK: SearchSDK;
  }
}

class SearchSDK {
  static initializeSDK(): void {
    if (!window.searchSDK) {
      // Initial State fetched Via API call
      const SEARCH_INITIAL_STATE = {
        selectedPet: "",
        selectedCity: ""
      };
      /* NOT GLOBAL STATE ONLY STATE PASSED TO REDUCER */
      /* SDK State will be available outside application by search key */
      store.addReducers({ search: Reducer(SEARCH_INITIAL_STATE) });
      window.searchSDK = new SearchSDK();
    }
  }

  static getInstance(): SearchSDK {
    return window.searchSDK;
  }

  searchByCity(searchedCity: string) {
    store.dispatch(asSearchEffects.SelectCity$(searchedCity));
  }

  searchPet(searchedPet: string) {
    store.dispatch(asSearchEffects.SelectPet$(searchedPet));
  }
}

SearchSDK.initializeSDK();

export const searchSDK = SearchSDK.getInstance();