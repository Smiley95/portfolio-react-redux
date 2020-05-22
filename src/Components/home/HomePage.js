import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Welcome</h1>
    <p>manage your financial portfolio</p>
    <Link to="assets" className="btn btn-primary btn-lg">
      update your portfolio
    </Link>
  </div>
);

export default HomePage;
