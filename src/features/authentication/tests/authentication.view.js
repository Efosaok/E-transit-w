import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AuthPage from '../scenes/AuthPage';

describe('AuthPage component test suite', () => {
  describe('sign up page component test-suite', () => {
    const props = {
      history: {
        location: {
          pathname: '/',
        },
      },
    };

    const wrapper = mount(<MemoryRouter><AuthPage {...props} /></MemoryRouter>);
    it('renders signup form properly', () => {
      expect(wrapper.exists()).toBeTruthy();
      expect(wrapper.find('.firstname').exists()).toBeTruthy();
    });

    it(`updates the corresponding state when
    input field value is changed'`, () => {
      const firstNameInputField = wrapper.find('.firstname');
      firstNameInputField.simulate('change', {
        target: { value: 'example', name: 'firstName' },
      });
      expect(wrapper.find('AuthPage')
        .instance().state.inputData.firstName).toEqual('example');
    });

    it(`shows appropriate error message as the
    input field value changes`, () => {
      const firstNameInputField = wrapper.find('.firstname');
      firstNameInputField.simulate('change', {
        target: { value: '    ', name: 'firstName' },
      });
      expect(wrapper.find('.error-message')
        .props().children).toEqual('this field is required');

      firstNameInputField.simulate('change', {
        target: { value: 'efy44', name: 'firstName' },
      });
      expect(wrapper.find('.error-message')
        .props().children).toEqual('this field can only be letters');
    });

    it(`runs a validation and error message is displayed on
    each input fields when the signup submit button is clicked`, () => {
      wrapper.find('.default-btn').simulate('click');
      expect(wrapper
        .find('.error-message')
        .at(0)
        .props().children).toEqual('this field can only be letters');
      expect(wrapper
        .find('.error-message')
        .at(1)
        .props().children).toEqual('this field is required');
      expect(wrapper
        .find('.error-message')
        .at(2)
        .props().children).toEqual('this field is required');
      expect(wrapper
        .find('.error-message')
        .at(3)
        .props().children).toEqual('this field is required');
    });
  });

  describe('sign in component test-suite', () => {
    const props = {
      history: {
        location: {
          pathname: '/signin',
        },
      },
    };

    const wrapper = mount(<MemoryRouter><AuthPage {...props} /></MemoryRouter>);
    it('renders the signin form if the location pathname is /signin', () => {
      expect(wrapper.find('h3').props().children).toEqual('Sign In');
    });

    it(`runs a validation and error message is displayed on
    each input fields when the signup submit button is clicked`, () => {
      wrapper.find('.default-btn').simulate('click');
      expect(wrapper
        .find('.error-message')
        .at(0)
        .props().children).toEqual('this field is required');
      expect(wrapper
        .find('.error-message')
        .at(1)
        .props().children).toEqual('this field is required');
    });
  });
});
