import * as types from "./actionsTypes";
import * as historyApi from "../../api/historyApi";

export function loadHistorySuccess(history) {
  return { type: types.LOAD_HISTORY, history };
}

export function updateHistorySuccess(historyEvent) {
  return { type: types.UPDATE_ASSET_HISTORY, historyEvent };
}

export function loadHistory() {
  return function (dispatch) {
    return historyApi
      .getHistory()
      .then((history) => {
        dispatch(loadHistorySuccess(history));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateHistory(newHistoryEvent) {
  return function (dispatch) {
    return historyApi
      .saveHistory(newHistoryEvent)
      .then((newHistoryEvt) => {
        dispatch(updateHistorySuccess(newHistoryEvt));
      })
      .catch((error) => {
        throw error;
      });
  };
}
