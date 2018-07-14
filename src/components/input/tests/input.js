import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../InputField';

describe('Input field component test-suite', () => {
  it('renders based on default props if value is undefined', () => {
    const props = {
      handleChange: jest.fn(),
    };

    const wrapper = shallow(<InputField {...props} />);
    expect(wrapper
      .find('input').props().type).toEqual('text');
    expect(wrapper
      .find('input').props().className).toEqual('inputfield new-input');
  });

  it('renders based on passed props if defined', () => {
    const props = {
      type: 'password',
      secondaryClassNames: 'secret',
      name: 'name',
      handleChange: jest.fn(),
    };
    const wrapper = shallow(<InputField {...props} />);
    expect(wrapper
      .find('input').props().type).toEqual('password');
    expect(wrapper
      .find('input').props().className).toEqual('inputfield secret');
  });
});
