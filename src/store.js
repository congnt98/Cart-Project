import { createStore, applyMiddleware, compose } from "redux";
import CombineReducers from './reducers/combineReducers'
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(CombineReducers, composeEnhancer(applyMiddleware(thunk))
);
export default Store;
