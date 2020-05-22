import * as types from "../actions/actionsTypes";
import initialState from "./initialState";
export default function HistoryReducer(state = initialState.history, action) {
  switch (action.type) {
    case types.LOAD_HISTORY:
      //remember to not use push pull or reverse any mutable method
      console.log("history reducer ");
      return action.history;
    case types.UPDATE_ASSET_HISTORY:
      console.log("this reducer ");
      //remember to not use push pull or reverse any mutable method
      return [...state, { ...action.historyEvent }];

    default:
      return state;
  }
}
