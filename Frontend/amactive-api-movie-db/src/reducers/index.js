import { combineReducers } from "redux";
import listReducer from "./list";
import itemReducer from "./item";

const rootReducer = combineReducers({
  listReducer,
  itemReducer
});

export default rootReducer;
