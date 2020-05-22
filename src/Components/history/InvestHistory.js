import React from "react";
import PropTypes from "prop-types";

const InvestHistory = ({ history }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>action Type</th>
        <th>asset Symbol</th>
        <th>quantity</th>
      </tr>
    </thead>
    <tbody>
      {history.map((invest) => {
        return (
          <tr key={invest.id}>
            <td>{invest.id}</td>
            <td>{invest.actionType}</td>
            <td>
              <a
                href={
                  "https://financialmodelingprep.com/api/v3/company/rating/" +
                  invest.assetId
                }
              >
                {invest.assetId}
              </a>
            </td>
            {invest.actionType == "sell" && <td> - {invest.quantity}</td>}
            {invest.actionType == "buy" && <td> + {invest.quantity}</td>}
          </tr>
        );
      })}
    </tbody>
  </table>
);

InvestHistory.propTypes = {
  history: PropTypes.array.isRequired,
};

export default InvestHistory;
