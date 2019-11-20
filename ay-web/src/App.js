import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

import MapRenderer from './containers/MapRenderer/MapRenderer';
import Aux from './hoc/Auxillary/Auxillary';
import './App.css';

// function Map() {
//   return (
//     <Aux>
//       <GoogleMap
//         defaultZoom = {12}
//         defaultCenter = {{
//           lat: 49.2742108,
//           lng: -122.8668799
//         }}
//       />
//       <Marker
//         key={"Bus"}
//         position={{
//           lat: 49.254151,
//           lng: -122.871122
//         }}
//         icon={{
//           url: "https://img.icons8.com/material-rounded/24/000000/bus.png",
//           scaledSize: new window.google.maps.Size(25, 25)
//         }}
//       />
//     </Aux>
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

class App extends Component{
  // return (
  //   <div style={{width: "100vw", height: "100vw"}}>
  //     <WrappedMap 
  //       googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
  //         process.env.REACT_APP_GOOGLE_KEY
  //       }`}
  //       loadingElement={<div style={{ height: "100%" }} />}
  //       containerElement={<div style={{ height: "100%" }} />}
  //       mapElement={<div style={{ height: "100%" }} />}
  //     />
  //   </div>
  // );
  render () {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path="/requestBus" component={MapRenderer} />
            <Route path="/" exact component={MapRenderer} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
