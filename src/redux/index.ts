import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import reducers from "./reducers"

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore
