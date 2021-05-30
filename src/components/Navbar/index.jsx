import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

Navbar.propTypes = {
  
};

function CustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  // console.log(match);
  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link to={to} className="nav-link">{label}</Link>
    </li>
  );
}

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
            <CustomLink to="/about" label="About" />
            <CustomLink to="/contact" label="Contact" />
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;