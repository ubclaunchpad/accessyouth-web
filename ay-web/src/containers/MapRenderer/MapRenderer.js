import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Aux from '../../hoc/Auxillary/Auxillary';

function Map() {
    return (
      <Aux>
        <GoogleMap
          defaultZoom = {12}
          defaultCenter = {{
            lat: 49.2742108,
            lng: -122.8668799
          }}
        />
        <Marker
          key={"Bus"}
          position={{
            lat: 49.254151,
            lng: -122.871122
          }}
          icon={{
            url: "https://img.icons8.com/material-rounded/24/000000/bus.png",
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      </Aux>
    )
  }
  
  const WrappedMap = withScriptjs(withGoogleMap(Map));

class MapRenderer extends Component {

    render() {
        return (
            <div style={{width: "100vw", height: "100vh", marginTop:"-17px"}}>
                <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY
                    }`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        );
    }
}

export default MapRenderer;