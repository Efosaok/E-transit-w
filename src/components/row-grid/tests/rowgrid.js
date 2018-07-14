import React from 'react';
import { shallow } from 'enzyme';
import RowGrid from '../RowGrid';

const props = {
  allComponents: [
    <span className="hello">hello</span>,
    <span className="world">world</span>,
  ],
  secondaryClassNames: 'col-xs-6 col-sm-6 col-md-6',
};
const wrapper = shallow(<RowGrid {...props} />);
describe('test-suite for Row Grid component', () => {
  it(`renders parsed compoenents inside
  separate grid-specification divs`, () => {
    expect(wrapper.find('.hello').parent().is('.col-xs-6'))
      .toBeTruthy();
    expect(wrapper.find('.world').parent().is('.col-xs-6'))
      .toBeTruthy();
  });
});
