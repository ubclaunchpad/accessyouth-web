import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

import MapRenderer from './containers/MapRenderer/MapRenderer';
import RequestBus from './containers/RequestBus/RequestBus';
import Aux from './hoc/Auxillary/Auxillary';
import './App.css';

class App extends Component{
  render () {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path="/requestBus" component={RequestBus} />
            <Route path="/" exact component={MapRenderer} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
