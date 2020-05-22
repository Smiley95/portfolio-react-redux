import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/assets" activeStyle={activeStyle}>
        Assets
      </NavLink>
      {" | "}
      <NavLink to="/history" activeStyle={activeStyle}>
        History
      </NavLink>
    </nav>
  );
}
export default Header;
