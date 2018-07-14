import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navLink.scss';

const NavLink = ({ text, path, secondaryClassNames }) => (
  <Link to={path} className={secondaryClassNames}>
    {text}
  </Link>
);

export default NavLink;

NavLink.defaultProps = {
  path: '#',
  text: 'Link',
  secondaryClassNames: 'links-stage-one',
};

NavLink.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  secondaryClassNames: PropTypes.string,
};
