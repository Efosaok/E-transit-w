import React from 'react';
import { shallow } from 'enzyme';
import Loaders from '../Loaders';

describe('Loaders component test-suite', () => {
  it('renders component peoperly', () => {
    const wrapper = shallow(<Loaders />);
    expect(wrapper.exists).toBeTruthy();
  });
});
