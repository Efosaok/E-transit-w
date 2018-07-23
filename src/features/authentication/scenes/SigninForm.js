import React from 'react';
import PropTypes from 'prop-types';
import Form from 'Components/form/Form';
import SocialMediaButtonsSection from '../common/SocialMediaButtonsSection';
import domStructureProps from './domStructureProps.json';

const { signupDomStructureProps } = domStructureProps;

const SigninForm = ({ handleChange, handleSubmit, validationErrors }) => (
  <React.Fragment>
    <div className="container">
      <h3>Sign In</h3>
    </div>
    <SocialMediaButtonsSection text="signin" />
    <form className="container form-fields">
      <Form
        inputFieldsProps={signupDomStructureProps.slice(2, 4)}
        buttonText={domStructureProps.buttonTextSignIn}
        handleChange={handleChange}
        validationErrors={validationErrors}
        handleSubmit={handleSubmit}
      />
      <br />
    </form>
  </React.Fragment>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validationErrors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SigninForm;
