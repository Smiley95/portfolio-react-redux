import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  type,
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  max,
  disable,
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {disable === "true" && (
          <input
            type={type}
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled
          />
        )}
        {type === "number" && (
          <input
            type={type}
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            min="0"
            max={max}
          />
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  max: PropTypes.number,
  disable: PropTypes.string,
};

export default TextInput;
