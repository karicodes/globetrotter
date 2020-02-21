import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default Map;
