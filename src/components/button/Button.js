import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
  text,
  secondaryClassNames,
  handleClick,
}) => (
  <button
    className={`default-btn ${secondaryClassNames}`}
    onClick={handleClick}
  >
    {text}
  </button>
);

export default Button;

Button.defaultProps = {
  text: 'OK',
  secondaryClassNames: 'btn-block',
};

Button.propTypes = {
  text: PropTypes.string,
  secondaryClassNames: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
