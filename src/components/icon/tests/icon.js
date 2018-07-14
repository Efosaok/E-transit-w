import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('Icon component test-suite', () => {
  it('renders based on default props if props is not parsed', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.find('i').props().className).toEqual('fa fa');
  });

  it('renders based on parsed props if defined', () => {
    const props = {
      secondaryClassNames: 'fa-icon',
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('i').props().className).toEqual('fa fa-icon');
  });
});
