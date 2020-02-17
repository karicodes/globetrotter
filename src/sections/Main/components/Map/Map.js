import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 51.4934,
    longitude: -0.000500,
    zoom: 1
  })

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      mapStyle="mapbox://styles/kb51/ck6hzqrra127k1imp75s9nivk"
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
    >
      {/* <Marker latitude={} longitude={}>

      </Marker> */}
    </ReactMapGL>
  );
}