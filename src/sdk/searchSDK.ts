import { BehaviorSubject } from "rxjs";

declare global {
  interface Window {
    searchSDK: SearchSDK;
  }
}

export class SearchSDK {
  static initializeSDK(): void {
    if (!window.cartSDK) {
      window.searchSDK = new SearchSDK();
    }
  }

  static getInstance(): SearchSDK {
    return window.searchSDK;
  }

  private $searchedCity: BehaviorSubject<string> = new BehaviorSubject("");
  private $selectedPet: BehaviorSubject<string> = new BehaviorSubject("");

  constructor() {}

  getSearchedCity() {
    return this.$searchedCity;
  }

  setSearchedCity(city: string) {
    this.$searchedCity.next(city);
  }

  getSelectedPet(): BehaviorSubject<string> {
    return this.$selectedPet;
  }

  setSelectedPet(breed: string) {
    this.$selectedPet.next(breed);
  }
}
