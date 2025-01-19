import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1em", background: "#ddd" }}>
    <Link to="/">Home</Link> | <Link to="/admin">Admin Dashboard</Link>
  </nav>
);

export default Navbar;