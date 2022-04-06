import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger({
  // ...options
});

const store = createStore(reducers, {}, applyMiddleware(thunk, logger));

export default store;
