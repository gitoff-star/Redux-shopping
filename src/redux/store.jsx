import rootReducers from "./reducer";
import { createStore,compose, applyMiddleware } from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

// for redux tool debugging 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(logger)));


export default store;