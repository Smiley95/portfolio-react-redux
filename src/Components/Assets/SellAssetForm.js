import React from "react";
import PropTypes from "prop-types";
import CurrencyInput from "react-currency-input";
import TextInput from "../common/TextInput";

const SellAssetForm = ({
  asset,
  onSave,
  onChange,
  soldPrice,
  soldQuantity,
  saving = false,
  errors = {},
  maxQuantity,
}) => {
  return (
    <form onSubmit={onSave}>
      <h2> Sell Asset</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        type="text"
        name="id"
        label="symbol"
        value={asset.id}
        disable="true"
      />
      <TextInput
        type="text"
        name="name"
        label="Asset Name"
        value={asset.name}
        disable="true"
      />
      <label htmlFor={CurrencyInput}>{"Price"}</label>
      <br />
      <CurrencyInput
        name="price"
        value={soldPrice}
        onChangeEvent={onChange}
        allowNegative="false"
      />
      {errors.price && <div className="alert alert-danger">{errors.price}</div>}
      <TextInput
        type="number"
        name="quantity"
        label={"Quantity (you can not sell more than " + maxQuantity + ")"}
        value={soldQuantity}
        onChange={onChange}
        error={errors.quantity}
        max={maxQuantity}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

SellAssetForm.propTypes = {
  assets: PropTypes.array.isRequired,
  asset: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  maxQuantity: PropTypes.number.isRequired,
  soldPrice: PropTypes.number.isRequired,
  soldQuantity: PropTypes.number.isRequired,
};

export default SellAssetForm;
