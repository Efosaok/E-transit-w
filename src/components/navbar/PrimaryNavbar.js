import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Brand from '../brand/Brand';
import './navbar.scss';

const PrimaryNavbar = ({
  brandClassName,
}) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="toggler">☰</span>
    </button>
    <div className={`nav-item ${brandClassName}`}>
      <Link to="/">
        <Brand />
      </Link>
    </div>
  </nav>
);

export default PrimaryNavbar;

PrimaryNavbar.defaultProps = {
  brandClassName: 'brand-section',
};

PrimaryNavbar.propTypes = {
  brandClassName: PropTypes.string,
};
