import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Inventory Management</div>
      <Link className="navbar-button"  to="/addinventory" >ADD INVENTORY</Link>
    </nav>
  );
};

export default Navbar;
