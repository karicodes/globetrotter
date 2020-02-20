
import React, { Component, useContext, useState } from 'react';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import Pins from './Pins';
import PinInfo from './PinInfo';
import { MapContext } from '../../Contexts/MapContext';

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 51.4934,
    longitude: -0.000500,
    zoom: 1,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100%",
  })

  const [popupInfo, setPopUpInfo] = useState(null);

  const _onClickMarker = country => {
    setPopUpInfo(country)
  };

  const mapContext = useContext(MapContext);

  const [visitedCountries] = mapContext.visited;
  const [bucketlistCountries] = mapContext.bucketlist;

  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
    >

      <Pins color='limegreen' data={visitedCountries} onClick={_onClickMarker} />
      <Pins color='dodgerblue' data={bucketlistCountries} onClick={_onClickMarker} />

      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.country.latlng[1]}
          latitude={popupInfo.country.latlng[0]}
          closeOnClick={false}
          onClose={() => setPopUpInfo(null)}
        >
          <PinInfo info={popupInfo} />
        </Popup>
      )}

      <div style={fullscreenControlStyle}>
        <FullscreenControl />
      </div>
      <div style={navStyle}>
        <NavigationControl />
      </div>
      <div style={scaleControlStyle}>
        <ScaleControl />
      </div>
    </MapGL>
  );
}









