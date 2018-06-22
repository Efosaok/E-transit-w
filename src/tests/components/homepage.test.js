import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/containers/header/Header';

const wrapper = mount(<Header />);

describe('first test-suite', () => {
  it('renders first component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
