import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

const Label = ({
  associatedTag,
  text,
}) => (
  <label htmlFor={associatedTag}>{text}</label>
);

export default Label;

Label.defaultProps = {
  text: 'none',
  associatedTag: 'email',
};

Label.propTypes = {
  text: PropTypes.string,
  associatedTag: PropTypes.string,
};
