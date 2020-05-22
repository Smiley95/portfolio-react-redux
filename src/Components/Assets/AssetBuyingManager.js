import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as reduxAssetActions from "../../redux/actions/assetActions";
import * as reduxHistoryActions from "../../redux/actions/historyActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BuyAssetForm from "./BuyAssetForm";
import newAsset from "../../../tools/mockData";
import { toast } from "react-toastify";
import uuid from "react-uuid";

function AssetBuyingManager({
  assets,
  assetHistoryActions,
  assetActions,
  history,
  portfolioValue,
  ...props
}) {
  const [boughtQuantity, setBoughtQuantity] = useState(0);
  const [asset, setAsset] = useState({ ...props.asset });
  const [errors, setErrors] = useState();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (assets.length === 0) {
      assetActions.loadAssets().catch((error) => alert(error));
    } else {
      setAsset({ ...props.asset });
    }
  }, [props.asset]); //[] used to make sure that the function runs once the component mounts without it the useEffect function runs each time the component renders

  function handleChange(event) {
    setBoughtQuantity(parseInt(event.target.value, 10));
  }

  function formIsValid() {
    const errors = {};

    if (boughtQuantity == 0)
      errors.quantity = "must select number of actions to buy";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    const newQuantity = asset.quantity + boughtQuantity;
    const newAsset = { ...asset, quantity: newQuantity };
    assetActions
      .saveBoughtAsset(newAsset)
      .then(() => {
        assetHistoryActions.updateHistory({
          id: uuid(),
          actionType: "buy",
          assetId: newAsset.id,
          quantity: boughtQuantity,
        });
        toast.success(
          boughtQuantity + " actions bought of the asset " + newAsset.id
        );
        history.push("/assets");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return (
    <>
      <BuyAssetForm
        asset={asset}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        boughtQuantity={boughtQuantity}
        saving={saving}
      />
    </>
  );
}
AssetBuyingManager.propTypes = {
  assets: PropTypes.array.isRequired,
  assetActions: PropTypes.object.isRequired,
  assetHistoryActions: PropTypes.object.isRequired,
  asset: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  portfolioValue: PropTypes.number.isRequired,
};

export function getAssetBySymbol(assets, symbol) {
  return assets.find((asset) => asset.id === symbol) || null;
}

function mapStateToProps(state, ownProps) {
  const symbol = ownProps.match.params.id;
  const asset =
    symbol && state.assets.length > 0
      ? getAssetBySymbol(state.assets, symbol)
      : newAsset;
  return {
    asset,
    assets: state.assets,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    assetActions: bindActionCreators(reduxAssetActions, dispatch),
    assetHistoryActions: bindActionCreators(reduxHistoryActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetBuyingManager);
