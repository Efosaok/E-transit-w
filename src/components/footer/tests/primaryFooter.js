import React from 'react';
import { shallow } from 'enzyme';
import PrimaryFooter from '../PrimaryFooter';

describe('Primary Footer test suite', () => {
  it('renders the component', () => {
    const wrapper = shallow(<PrimaryFooter />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.footer-content').props().children)
      .toEqual('© all rights reserved, E-transit 2018');
  });
});
