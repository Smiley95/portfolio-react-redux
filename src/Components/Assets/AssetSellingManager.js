import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as reduxAssetActions from "../../redux/actions/assetActions";
import * as reduxHistoryActions from "../../redux/actions/historyActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SellAssetForm from "./SellAssetForm";
import newAsset from "../../../tools/mockData";
import { toast } from "react-toastify";
import uuid from "react-uuid";

function AssetSellingManager({
  assets,
  assetActions,
  assetHistoryActions,
  history,
  ...props
}) {
  const [asset, setAsset] = useState({ ...props.asset });
  const [soldQuantity, setSoldQuantity] = useState(0);
  const [soldPrice, setSoldPrice] = useState(props.asset.price);
  const [maxQuantity, setMax] = useState({ ...props.maxQuantity });
  const [errors, setErrors] = useState();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (assets.length === 0) {
      assetActions.loadAssets().catch((error) => alert(error));
    } else {
      setAsset({ ...props.asset });
      setMax(asset.quantity);
      setSoldPrice(asset.price);
    }
  }, [props.asset]); //[] used to make sure that the function runs once the component mounts without it the useEffect function runs each time the component renders
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "price") {
      setSoldPrice(parseFloat(value));
    }
    if (name === "quantity") setSoldQuantity(parseInt(value, 10));
  }

  function formIsValid() {
    const errors = {};

    if (soldPrice == 0) {
      errors.price = "Must set a price.";
    }
    if (soldQuantity == 0)
      errors.quantity = "must select number of actions to sell";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    const newQuantity = asset.quantity - soldQuantity;
    const newAsset = { ...asset, quantity: newQuantity };
    assetActions
      .saveSoldAsset(newAsset)
      .then(() => {
        assetHistoryActions.updateHistory({
          id: uuid(),
          actionType: "sell",
          assetId: newAsset.id,
          quantity: soldQuantity,
        });
        toast.success(
          soldQuantity + " actions are sold of the asset " + newAsset.id
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
      <SellAssetForm
        errors={errors}
        asset={asset}
        onChange={handleChange}
        onSave={handleSave}
        maxQuantity={maxQuantity}
        soldQuantity={soldQuantity}
        soldPrice={soldPrice}
        saving={saving}
      />
    </>
  );
}
AssetSellingManager.propTypes = {
  assets: PropTypes.array.isRequired,
  assetActions: PropTypes.object.isRequired,
  assetHistoryActions: PropTypes.object.isRequired,
  asset: PropTypes.object.isRequired,
  maxQuantity: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
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
  const maxQuantity = asset.quantity;
  return {
    maxQuantity,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetSellingManager);
