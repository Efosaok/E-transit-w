import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import PrimaryNavbar from 'Components/navbar/PrimaryNavbar';
import PrimaryFooter from 'Components/footer/PrimaryFooter';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

import {
  validateAField,
  validateAllFields,
} from '../validation/validateFields';

import '../public/authpages.scss';

/**
 *
 * @class AuthPage
 * @returns {object} html dom
 * of signup and signin page and
 * contains all related methods
 */
class AuthPage extends Component {
  /**
   *Creates an instance of AuthPage.
   * @param {props} props parsed from redux store
   * @memberof AuthPage
   */
  constructor(props) {
    super(props);
    this.state = {
      inputData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
    autoBind(this);
  }

  /**
   *
   * @param {object} event event object of
   * target element
   * @memberof AuthPage
   * @returns {object} error object from validation and
   * sets state to value from target element.
   */
  handleChange(event) {
    const { inputData, validationErrors } = this.state;
    const data = { [event.target.name]: event.target.value };
    const validation = validateAField(data, event.target.name);
    this.setState({
      inputData: {
        ...inputData,
        [event.target.name]: event.target.value,
      },
      validationErrors: {
        ...validationErrors,
        [event.target.name]: validation.message,
      },
    });
  }

  /**
   *
   * @param {event} event
   * @returns {any} sets state to error object
   * or returns null
   * @memberof AuthPage
   */
  validateInputFields() {
    const { inputData, validationErrors } = this.state;
    const validation = validateAllFields(inputData);
    this.setState({
      validationErrors: {
        ...validationErrors,
        ...validation,
      },
    });
  }

  /**
   *
   *
   * @param {object} event event object
   * of target element
   * @memberof AuthPage
   * @returns {object} fills state with error message
   * object or dispatch signup action with validated data
   */
  signUp(event) {
    event.preventDefault();
    this.validateInputFields();
    // TODO: sign up user here...
  }
  /**
   *
   * @param {object} event dom event object
   * @memberof AuthPage
   * @returns {function} to dispacth signin action
   */
  signIn(event) {
    event.preventDefault();
    this.validateInputFields();
    // TODO: sign in user here
  }
  /**
   *
   * @returns {object} dom object
   * @memberof AuthPage
   */
  renderForm() {
    const { pathname } = this.props.history.location;
    if (pathname === '/') {
      return (
        <SignupForm
          handleChange={this.handleChange}
          validationErrors={this.state.validationErrors}
          handleSubmit={this.signUp}
        />
      );
    }
    return (
      <SigninForm
        handleChange={this.handleChange}
        validationErrors={this.state.validationErrors}
        handleSubmit={this.signIn}
      />
    );
  }

  /**
   *
   *
   * @returns {object} html document of
   * @memberof AuthPage
   */
  render() {
    return (
      <div className="auth-page">
        <PrimaryNavbar />
        <div className="form-section">
          <div className="form-padder d-flex justify-content-end">
            <div className="form-auth container">{this.renderForm()}</div>
          </div>
        </div>
        <PrimaryFooter />
      </div>
    );
  }
}

export default AuthPage;

AuthPage.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
