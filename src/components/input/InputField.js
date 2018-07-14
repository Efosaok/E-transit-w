import React from 'react';
import PropTypes from 'prop-types';
import './inputfield.scss';

const InputField = ({
  type,
  secondaryClassNames,
  placeholder,
  handleChange,
  name,
  defaultValue,
}) => (
  <div>
    <input
      className={`inputfield ${secondaryClassNames}`}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      defaultValue={defaultValue}
    />
  </div>
);

export default InputField;

InputField.defaultProps = {
  type: 'text',
  secondaryClassNames: 'new-input',
  placeholder: '',
  defaultValue: '',
  name: '',
};

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  secondaryClassNames: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
};
