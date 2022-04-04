import React from "react";
import {Link} from 'react-router-dom'

const Template = ({weekday, date, icon, temp, path }) => {
  return (
    <Link
      to={path}
      className="template-day mb-3 common-link"
    >
      <div className="d-flex flex-column">
        <span className="fw-bolder">{weekday}</span>
        <span className="text-secondary">
          {date}
        </span>
      </div>
      <div className="stats d-flex gap-3 align-items-center">
        <img width="48px" src={icon} alt="" />
        <span>{temp} °C</span>
        <i className="bi bi-chevron-right"></i>
      </div>
    </Link>
  );
};

export default Template;
