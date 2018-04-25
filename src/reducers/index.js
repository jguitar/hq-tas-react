import { combineReducers } from "redux";
import { i18nReducer } from "react-redux-i18n";

import contributors from "./contributors_reducer";

const rootReducer = combineReducers({
  i18n: i18nReducer,
  contributors,
});

export default rootReducer;
