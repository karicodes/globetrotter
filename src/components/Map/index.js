import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import mapToken from './token';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "98vw",
    height: "98vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 1.2
  })

    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={mapToken.publicToken}
        mapStyle="mapbox://styles/kb51/ck6hzqrra127k1imp75s9nivk"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        markers here
        </ReactMapGL>
    );
  }