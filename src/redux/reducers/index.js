import { combineReducers } from "redux";
import assets from "./AssetReducer";
import history from "./HistoryReducer";
const rootReducer = combineReducers({
  assets,
  history,
});
export default rootReducer;
