import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";
import { loadTranslations, setLocale, syncTranslationWithStore } from "react-redux-i18n";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import translationsObject from "./assets/i18n";

const store = createStore(reducers, applyMiddleware(promiseMiddleware, thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale("es"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
