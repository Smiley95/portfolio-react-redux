import React from "react";
import PropTypes from "prop-types";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Portfolio = ({ assets, portfolioValue }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>name</th>
          <th>price</th>
          <th>quantity</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => {
          return (
            <tr key={asset.id}>
              <td>{asset.id}</td>
              <td>
                <a
                  href={
                    "https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=demo"
                  }
                >
                  {asset.name}
                </a>
              </td>
              <td>{asset.price}</td>
              <td>{asset.quantity}</td>
              <td>
                <Button variant="info">
                  <Link
                    to={"/asset/buy/" + asset.id}
                    style={{ color: "white" }}
                  >
                    Buy
                  </Link>
                </Button>{" "}
                <Button variant="dark">
                  <Link
                    to={"/asset/sell/" + asset.id}
                    style={{ color: "white" }}
                  >
                    Sell
                  </Link>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <Row>
      <Col md={{ span: 4, offset: 10 }}>
        <h3>Total value {portfolioValue}</h3>
      </Col>
    </Row>
  </>
);

Portfolio.propTypes = {
  assets: PropTypes.array.isRequired,
  portfolioValue: PropTypes.number.isRequired,
};

export default Portfolio;
