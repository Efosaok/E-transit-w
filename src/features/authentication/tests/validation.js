import {
  validateAField,
  validateAllFields,
} from '../validation/validateFields';

describe('Validations test-suite', () => {
  describe('validateAField test-suite', () => {
    it(`returns a key:value message:error-message
    pair of error message`, () => {
      validateAField('hgy', 'firstName');
      expect(validateAField('   ', 'firstName'))
        .toEqual({ message: 'this field is required' });
    });
  });

  describe('validateAllFields test-suite', () => {
    it(`returns object containing key:value
    pairs of all error messages`, () => {
      const data = {
        firstName: 'you',
        password: 'swaddles',
      };
      expect(validateAllFields(data))
        .toEqual({
          lastName: 'this field is required',
          email: 'this field is required',
          confirmPassword: 'this field is required',
        });
    });

    it(`validates if the confirmpassword field is
    equal to the password field`, () => {
      const data = {
        password: 'nonono',
        confirmPassword: 'yesyes',
      };
      expect(validateAllFields(data).confirmPassword)
        .toEqual('this value does not match the password');
    });
  });
});
