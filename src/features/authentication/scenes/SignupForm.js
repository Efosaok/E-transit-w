import React from 'react';
import PropTypes from 'prop-types';
import Form from 'Components/form/Form';
import SocialMediaButtonsSection from '../common/SocialMediaButtonsSection';
import TermsOfPrivacyNav from '../common/TermsOfPrivacyNav';
import InputInline from './InputInline';
import domStructureProps from './domStructureProps.json';

const { signupDomStructureProps } = domStructureProps;

const SignupForm = ({ handleChange, handleSubmit, validationErrors }) => (
  <React.Fragment>
    <div className="container">
      <h3>Sign Up</h3>
    </div>
    <SocialMediaButtonsSection text="signup" />
    <form className="container form-fields">
      <InputInline
        handleChange={handleChange}
        validationErrors={validationErrors}
        handleSubmit={handleSubmit}
      />
      <Form
        inputFieldsProps={signupDomStructureProps.slice(2, 5)}
        buttonText={domStructureProps.buttonTextSignup}
        handleChange={handleChange}
        validationErrors={validationErrors}
        handleSubmit={handleSubmit}
      />
      <TermsOfPrivacyNav />
    </form>
  </React.Fragment>
);

export default SignupForm;

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validationErrors: PropTypes.objectOf(PropTypes.string).isRequired,
};
