import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

const Icon = ({
  secondaryClassNames,
}) => (
  <i className={`fa ${secondaryClassNames}`} />
);

export default Icon;

Icon.defaultProps = {
  secondaryClassNames: 'fa',
};

Icon.propTypes = {
  secondaryClassNames: PropTypes.string,
};
