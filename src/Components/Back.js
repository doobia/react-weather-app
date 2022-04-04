import React from "react";
import { useNavigate } from "react-router-dom";
const Back = () => {
  let navigate = useNavigate();
  return (
    <button className="btn d-flex gap-2" onClick={() => navigate(-1)}>
      <i className="bi bi-caret-left-square-fill"></i>
      <span>Go Back</span>
    </button>
  );
};

export default Back;
