import Validator from 'validatorjs';

const rules = {
  firstName: 'required|alpha',
  lastName: 'required|alpha',
  email: 'required|email',
  password: 'required|min:8',
  confirmPassword: 'required|equaltopassword',
};

const errorMessages = {
  required: 'this field is required',
  alpha: 'this field can only be letters',
  email: 'your email is not yet valid',
};

// register custom validator checking if
// password and confirmpassword are equal
const registerRuleEqualToPassword = (password) => {
  Validator.register(
    'equaltopassword',
    value => (!password || value === password),
    'this value does not match the password',
  );
};

/**
 *
 * @param {object} data containing key:value pairs
 * of field and value to be validated
 * @param {string} field field in rules to run validation against
 * @returns {object} containing key:value pairs of a field:errormessage
 */

export const validateAField = (data, field) => {
  registerRuleEqualToPassword();
  const validation = new Validator(data, rules, errorMessages);
  validation.passes();
  let firstError = validation.errors.first(field);
  if (firstError === false) firstError = '';
  return {
    message: firstError,
  };
};

/**
 *
 * @param {object} data object to run rules against
 * @returns {object} containing keys:value pair of field:errormessage
 *
 */
export const validateAllFields = (data) => {
  registerRuleEqualToPassword(data.password);
  const validation = new Validator(data, rules, errorMessages);
  validation.passes();
  const errors = validation.errors.all();
  Object.keys(errors).forEach((errorKey) => {
    // reassigns the key to a destructured
    // version of the error message
    [errors[errorKey]] = errors[errorKey];
  });
  return errors;
};
