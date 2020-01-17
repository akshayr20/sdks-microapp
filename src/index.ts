import { CartSDK, SearchSDK, StateSDK } from "./sdk";

const initializeCartSDK = () => CartSDK.initializeSDK();

const initializeSearchSDK = () => SearchSDK.initializeSDK();

const getCartSDK = () => CartSDK.getInstance();

const getSearchSDK = () => SearchSDK.getInstance();

const initializeStateSDK = () => StateSDK.initializeSDK();

const getStateSDK = () => StateSDK.getInstance();

export {
  getCartSDK,
  getSearchSDK,
  getStateSDK,
  initializeCartSDK,
  initializeSearchSDK,
  initializeStateSDK
};
