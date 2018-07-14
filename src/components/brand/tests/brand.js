import React from 'react';
import { shallow } from 'enzyme';
import Brand from '../Brand';

describe('Brand component test-suite', () => {
  it('renders component when mounted', () => {
    const wrapper = shallow(<Brand />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
