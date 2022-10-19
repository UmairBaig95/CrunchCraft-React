import React from "react";
import { Link } from "react-router-dom";

function Button({ btnText, path }) {
  return (
    <div className="my-3">
      <Link to={path} className="coustom-btn">
        {btnText}
      </Link>
    </div>
  );
}

export default Button;
