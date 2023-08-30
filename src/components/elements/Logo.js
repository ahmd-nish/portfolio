import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="Bolby" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img src="https://i.ibb.co/q17rcKZ/Orange-Black-Construction-Logo.png" alt="Bolby" />
      </Link>
    </div>
  );
}

export default Logo;
