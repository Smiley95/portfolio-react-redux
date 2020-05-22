import * as types from "./actionsTypes";
import * as assetApi from "../../api/assetApi";
// import updateHistory from "./historyActions";
export function buyAsset(asset) {
  return { type: types.BUY_ASSET, asset };
}
export function sellAsset(asset) {
  return { type: types.SELL_ASSET, asset };
}
export function loadAssetsSuccess(assets) {
  return { type: types.LOAD_ASSETS_SUCCESS, assets };
}
export function createAsset(asset) {
  return { type: types.CREATE_ASSET, asset };
}

export function loadAssets() {
  return function (dispatch) {
    return assetApi
      .getAssets()
      .then((assets) => {
        dispatch(loadAssetsSuccess(assets));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveBoughtAsset(asset) {
  return function (dispatch, getState) {
    return assetApi
      .saveAsset(asset)
      .then((savedAsset) => {
        dispatch(buyAsset(savedAsset));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveSoldAsset(asset) {
  return function (dispatch, getState) {
    return assetApi
      .saveAsset(asset)
      .then((savedAsset) => {
        dispatch(sellAsset(savedAsset));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveAsset(asset) {
  return function (dispatch, getState) {
    return assetApi
      .saveAsset(asset)
      .then((savedAsset) => {
        dispatch(createAsset(savedAsset));
      })
      .catch((error) => {
        throw error;
      });
  };
}
