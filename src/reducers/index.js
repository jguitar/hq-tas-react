import { combineReducers } from "redux";
import { i18nReducer } from "react-redux-i18n";

import contributors from "./contributors_reducer";
import contributor from "./contributor_reducer";

const rootReducer = combineReducers({
  i18n: i18nReducer,
  contributors,
  contributor,
});

export default rootReducer;
