import React from 'react';
import { shallow } from 'enzyme';
import NavLink from '../NavLink';

describe('Navlink component test-suite', () => {
  it('renders based on default props if required props are not parsed', () => {
    const wrapper = shallow(<NavLink />);
    expect(wrapper.find('Link').props().to).toEqual('#');
    expect(wrapper.find('Link').props().className).toEqual('links-stage-one');
  });

  it('renders based on parsed props if defined', () => {
    const props = {
      text: 'sign up',
      path: '/signup',
      secondaryClassNames: 'heil',
    };
    const wrapper = shallow(<NavLink {...props} />);
    expect(wrapper.find('Link').props().to).toEqual('/signup');
    expect(wrapper.find('Link').props().children).toEqual('sign up');
    expect(wrapper.find('Link').props().className).toEqual('heil');
  });
});
