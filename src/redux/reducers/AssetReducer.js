import initialState from "./initialState";
export default function AssetReducer(state = initialState.assets, action) {
  switch (action.type) {
    case "BUY_ASSET":
      //remember to not use push pull or reverse any mutable method
      return state.map((asset) =>
        asset.id === action.asset.id ? { ...action.asset } : asset
      );
    case "SELL_ASSET":
      //remember to not use push pull or reverse any mutable method
      return state.map((asset) =>
        asset.id === action.asset.id ? { ...action.asset } : asset
      );
    case "LOAD_ASSETS_SUCCESS":
      //remember to not use push pull or reverse any mutable method
      return action.assets;

    case "CREATE_ASSET":
      //remember to not use push pull or reverse any mutable method
      return [...state, { ...action.asset }];
    default:
      return state;
  }
}
