import { CartSDK, SearchSDK } from "./sdk";

const initializeCartSDK = () => CartSDK.initializeSDK();

const initializeSearchSDK = () => SearchSDK.initializeSDK();

const getCartSDK = () => CartSDK.getInstance();

const getSearchSDK = () => SearchSDK.getInstance();

export { getCartSDK, getSearchSDK, initializeCartSDK, initializeSearchSDK };
