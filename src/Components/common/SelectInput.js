import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function SelectInput({ onChange, defaultOption, value, error, options }) {
  useEffect(async () => {
    const result = await axios(
      "https://financialmodelingprep.com/api/v3/company/stock/list"
    );
    options = result.data;
    console.log(result.data);
  });
  return (
    <div className="form-group">
      <label htmlFor={name}>assets Names</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default SelectInput;
