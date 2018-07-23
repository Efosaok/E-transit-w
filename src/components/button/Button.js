import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
  text,
  secondaryClassNames,
  handleClick,
  ariaLabel,
  dataTarget,
  ariaControls,
  ariaExpanded,
  dataToggle,
  type,
}) => (
  <button
    className={`default-btn ${secondaryClassNames}`}
    onClick={handleClick}
    type={type}
    data-target={dataTarget}
    aria-label={ariaLabel}
    data-toggle={dataToggle}
    aria-controls={ariaControls}
    aria-expanded={ariaExpanded}
  >
    {text}
  </button>
);

export default Button;

Button.defaultProps = {
  text: 'OK',
  secondaryClassNames: 'btn-block',
  ariaControls: '',
  ariaLabel: '',
  dataToggle: '',
  dataTarget: '',
  ariaExpanded: '',
  type: 'button',
};

Button.propTypes = {
  text: PropTypes.string,
  secondaryClassNames: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.string,
  dataTarget: PropTypes.string,
  dataToggle: PropTypes.string,
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
};
