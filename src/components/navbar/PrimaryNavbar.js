import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavLink from '../nav-link/NavLink';
import Brand from '../brand/Brand';
import './navbar.scss';

const PrimaryNavbar = ({ brandClassName }) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <button
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="pure-button toggler navbar-toggler"
    >
      <span className="toggler">☰</span>
    </button>
    <div className={`nav-item ${brandClassName}`}>
      <Link to="/" className="nav-item">
        <Brand />
      </Link>
    </div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink path="/" text="SIGN UP" secondaryClassNames="nav-link" />
        </li>
        <li className="nav-item">
          <NavLink
            path="/signin"
            text="SIGN IN"
            secondaryClassNames="nav-link"
          />
        </li>
      </ul>
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
