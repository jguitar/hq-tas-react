import { combineReducers } from "redux";
import contributors from "./contributors_reducer";

const rootReducer = combineReducers({
  contributors,
});

export default rootReducer;
