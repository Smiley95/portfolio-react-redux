import React from "react";
import PropTypes from "prop-types";
import CurrencyInput from "react-currency-input";
import TextInput from "../common/TextInput";

const BuyAssetForm = ({
  asset,
  onSave,
  onChange,
  boughtQuantity,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2> Buy Asset</h2>
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

      <CurrencyInput
        value={asset.price}
        allowNegative={false}
        disabled={true}
      />
      <TextInput
        type="number"
        name="quantity"
        label="Quantity"
        value={boughtQuantity}
        onChange={onChange}
        error={errors.quantity}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

BuyAssetForm.propTypes = {
  assets: PropTypes.array.isRequired,
  asset: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  boughtQuantity: PropTypes.number.isRequired,
};

export default BuyAssetForm;
