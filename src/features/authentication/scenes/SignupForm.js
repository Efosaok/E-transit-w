import React from 'react';
import PropTypes from 'prop-types';
import Form from 'Components/form/Form';
import TermsOfPrivacyNav from '../common/TermsOfPrivacyNav';
import InputInline from './InputInline';
import domStructure from './domStructureProps.json';

const { signupDomStructureProps } = domStructure;

const SignupForm = ({
  handleChange,
  handleSubmit,
  validationErrors,
}) => (
  <form className="container form-fields">
    <InputInline
      handleChange={handleChange}
      validationErrors={validationErrors}
      handleSubmit={handleSubmit}
    />
    <Form
      inputFieldsProps={signupDomStructureProps.slice(2, 5)}
      buttonText={domStructure.buttonTextSignup}
      handleChange={handleChange}
      validationErrors={validationErrors}
      handleSubmit={handleSubmit}
    />
    <TermsOfPrivacyNav />
  </form>
);

export default SignupForm;

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validationErrors: PropTypes.objectOf(PropTypes.string).isRequired,
};
