import React from 'react';
import { shallow } from 'enzyme';
import PrimaryNavbar from '../PrimaryNavbar';

describe('primary navbar test suite', () => {
  const wrapper = shallow(<PrimaryNavbar />);
  it('renders component properly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders with default brand class name if none is parsed', () => {
    expect(wrapper.find('.nav-item')
      .hasClass('brand-section')).toBeTruthy();
  });
});
