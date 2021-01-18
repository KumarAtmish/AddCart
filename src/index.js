import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import combineReducers from "./services/Reducers/index";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["authType"] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, combineReducers);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(combineReducers, middleware);
const persistor = persistStore(store);
//console.warm("store data", store);
//

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
