import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('button component test suite', () => {
  it('renders with default props if value is undefined', () => {
    const wrapper = shallow(<Button handleClick={jest.fn()} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper
      .find('.default-btn').props().children).toEqual('OK');
    expect(wrapper
      .find('.default-btn').props().className).toEqual('default-btn btn-block');
  });

  it('renders based on passed props if defined', () => {
    const props = {
      text: 'Submit',
      secondaryClassNames: 'btn-primary',
      handleClick: jest.fn(),
    };
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper
      .find('.default-btn').props().children).toEqual('Submit');
    expect(wrapper
      .find('.default-btn')
      .props().className).toEqual('default-btn btn-primary');
  });
});
