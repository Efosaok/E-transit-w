import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../input/InputField';
import Button from '../button/Button';
import Label from '../label/Label';
import './form.scss';

/**
 *
 * @param {object} props
 * @returns {object} html document
 */
const Form = ({
  inputFieldsProps,
  buttonText,
  renderButton,
  handleChange,
  validationErrors,
  handleSubmit,
}) => (
  <div className="form">
    {inputFieldsProps.map(inputField => (
      <div className="input-field-section" key={inputField.id}>
        <Label
          text={inputField.labelText}
          htmlFor={inputField.labelFor}
          associatedTag={inputField.labelFor}
        />
        <InputField
          placeholder={inputField.placeholder}
          name={inputField.name}
          type={inputField.type}
          secondaryClassNames={inputField.secondaryClassNames}
          handleChange={handleChange}
        />
        {(validationErrors[inputField.name]) &&
        <p className="error-message animated fadeIn d-block">
          {validationErrors[inputField.name]}
        </p>
        }
      </div>
    ))}
    {(renderButton) &&
    <div className="action-button-section">
      <Button text={buttonText} handleClick={handleSubmit} />
    </div>}
  </div>
);

export default Form;

Form.defaultProps = {
  renderButton: true,
  buttonText: '',
  validationErrors: {
    firstName: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  },
};

Form.propTypes = {
  inputFieldsProps: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  buttonText: PropTypes.string,
  renderButton: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  validationErrors: PropTypes.objectOf(PropTypes.string),
  handleSubmit: PropTypes.func.isRequired,
};
