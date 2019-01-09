import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import { Provider } from "react-redux";
import { createStore, subscribe, dispatch, combineReducers } from "redux";
import Check from "./redux/Check";
const initialUserState = {
  uid: null
};

const persistConfig = {
  key: "root",
  storage
};

const reducer = function(state = initialUserState, action) {
  switch (action.type) {
    case "UID":
      return { ...state, uid: action.payload };
      break;

    case "NAME":
      return { ...state, name: action.payload };
      break;

    case "PIC":
      return { ...state, pic: action.payload };
      break;

    case "USERNAME":
      return { ...state, username: action.payload };
      break;

    case "WORK":
      return { ...state, work: action.payload };
      break;

    case "TYPE":
      return { ...state, type: action.payload };
      break;

    case "LIST":
      return { ...state, list: action.payload };
      break;

    case "ROLL":
      return { ...state, roll: action.payload };
      break;

    case "BATCH":
      return { ...state, batch: action.payload };
      break;

    default:
      return state;
      break;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  window.devToolsExtension && window.devToolsExtension()
);

store.subscribe(() => {});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
