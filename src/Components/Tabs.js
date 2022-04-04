import React from "react";
import { NavLink } from "react-router-dom";
const Tabs = () => {
  return (
    <div className="tabs text-center my-2">
      <NavLink activeclassname="active" className="react-link pb-2" to="/">
        Daily
      </NavLink>
      <NavLink className="react-link pb-2" to="/forecast">
        Forecast
      </NavLink>
    </div>
  );
};

export default Tabs;
