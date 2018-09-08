import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow,
  TrafficLayer,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(({
  isMarkerShown,
  lat,
  lng,
  infoChildren,
  defaultZoom,
  zoom,
  styles,
}) => (
  <GoogleMap
    defaultZoom={defaultZoom}
    center={{ lat, lng }}
    zoom={zoom}
    defaultOptions={{ styles }}
  >
    {isMarkerShown && <Marker position={{ lat, lng }} />}
    <InfoWindow position={{ lat, lng }}>
      <span>{infoChildren}</span>
    </InfoWindow>
    <TrafficLayer autoUpdate />
  </GoogleMap>
)));

export default Map;
