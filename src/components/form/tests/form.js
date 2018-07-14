import React from 'react';
import { mount } from 'enzyme';
import Form from '../Form';

const props = {
  inputFieldsProps: [
    {
      placeholder: 'First name',
      name: 'firstName',
      type: 'text',
      labelText: 'firstname (required)',
      labelFor: 'firstName',
      id: '1',
    },
    {
      placeholder: 'Last name',
      name: 'lastName',
      type: 'text',
      labelText: 'lastname (required)',
      labelFor: 'lastName',
      id: '2',
    },
  ],
  validationErrors: {
    firstName: '',
    lastname: '',
  },
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
};

const wrapper = mount(<Form {...props} />);

describe('test-suite for form component', () => {
  it(`renders input fields according to
  the length of the inputFieldsProps array`, () => {
    expect(wrapper.find('InputField').length).toEqual(2);
  });

  it('does not render button if renderButton prop is set to false', () => {
    wrapper.setProps({
      ...wrapper.props(),
      renderButton: false,
    });
    expect(wrapper.find('button').exists()).toBeFalsy();
  });

  it(`renders the error message for each field if the
  message for that field is not an empty string or undefined`, () => {
    expect(wrapper.find('.error-message').exists()).toBeFalsy();
    wrapper.setProps({
      ...props,
      validationErrors: {
        firstName: 'this field is required',
        lastName: 'this field should only be letters',
      },
    });
    expect(wrapper
      .find('.error-message')
      .at(0).props().children).toEqual('this field is required');
    expect(wrapper
      .find('.error-message')
      .at(1).props().children).toEqual('this field should only be letters');
  });
});
