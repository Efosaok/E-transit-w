import React from 'react';
import { mount } from 'enzyme';
import MapSection from '../views/MapSection';

// TODO: To be worked on later on as issues exist mocking the Map component
const mapWrapper = mount(<MapSection />);

describe('Map view components test-suite', () => {
  describe('Map component test-suite', () => {
    it('renders map', () => {
      expect(mapWrapper.find('GoogleMap').exists()).toBeTruthy();
    });

    it('does not render marker if isMarkerShown prop is false', () => {
      mapWrapper.setProps({
        isMarkerShown: false,
      });
      expect(mapWrapper.find('Marker').exists()).toBeFalsy();
    });

    it('renders marker if isMarkerShown prop is true', () => {
      mapWrapper.setProps({
        isMarkerShown: true,
      });
      expect(mapWrapper.find('Marker').exists()).toBeTruthy();
    });
  });
});
