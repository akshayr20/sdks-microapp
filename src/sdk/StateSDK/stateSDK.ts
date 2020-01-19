import { store } from "store-microapp";
import { BehaviorSubject } from "rxjs";

declare global {
  interface Window {
    stateSDK: StateSDK;
  }
}

class StateSDK {
  static initializeSDK(): void {
    if (!window.stateSDK) {
      window.stateSDK = new StateSDK();
    }
  }

  static getInstance(): StateSDK {
    return window.stateSDK;
  }

  connect(prop: string) {
    const subscription: BehaviorSubject<any> = new BehaviorSubject(null);
    const oldState: any = {};
    this.publishChange(prop, oldState, subscription);
    store.subscribe(() => {
      this.publishChange(prop, oldState, subscription);
    });
    return subscription;
  }

  private publishChange(
    prop: string,
    oldState: any,
    subscription: BehaviorSubject<any>
  ) {
    const appState: any = store.getState();
    const selectedState = { [prop]: appState[prop] };
    Object.entries(selectedState).map(([key, value]) => {
      if (oldState[key] !== value) {
        subscription.next({ state: value, oldState: oldState[key], key });
        oldState[key] = value;
      }
    });
  }
}

StateSDK.initializeSDK();

export const stateSDK = StateSDK.getInstance();
