import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { withRouter } from "react-router-dom";

const GoBack = ({ history }) => (
  <button onClick={() => history.goBack()} className="btn btn-back">
    <FaChevronLeft />
    back
  </button>
);

export default withRouter(GoBack);
