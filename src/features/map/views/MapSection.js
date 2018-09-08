import React, { Component } from 'react';
import { GoogleMap } from 'react-google-maps';
import mapStyles from './mapStyles.json';
import Map from './Map';
/**
 *
 * @class MapSection
 * @extends {Component}
 * @returns {object} methods
 */
class MapSection extends Component {
  /**
   *Creates an instance of MapSection.
   * @param {*} props
   * @memberof MapSection
   */
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: true,
      lat: -34.397,
      lng: 150.644,
      infoChildren: '',
      defaultZoom: 12,
      zoom: 12,
    };
  }

  /**
   *
   *
   * @memberof MapSection
   * @returns {any} object
   */
  componentDidMount() {
    const handleLocationError = (browserHasGeolocation, pos) => {
      this.setState({
        lat: pos.lat,
        lng: pos.lng,
        infoChildren: browserHasGeolocation
          ? 'Error: The Geolocation service failed.'
          : "Error: Your browser doesn't support geolocation.",
        isMarkerShown: false,
      });
    };

    const initMap = () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.setState({
              lat: pos.lat,
              lng: pos.lng,
              infoChildren: 'Location Found',
              isMarkerShown: true,
              zoom: 15,
            });
          },
          () => {
            handleLocationError(true, GoogleMap.getCenter());
          },
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, GoogleMap.getCenter());
      }
    };
    initMap();
  }

  /**
   *
   * @returns {object} html dom
   * @memberof MapSection
   */
  render() {
    const {
      isMarkerShown, lat, lng, infoChildren, defaultZoom, zoom,
    } = this.state;
    return (
      <div >
        <Map
          isMarkerShown={isMarkerShown}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.MAP_API_KEY}`} // eslint-disable-line
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100vh', width: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          lat={lat}
          lng={lng}
          infoChildren={infoChildren}
          defaultZoom={defaultZoom}
          zoom={zoom}
          styles={mapStyles}
        />
      </div>
    );
  }
}

export default MapSection;
