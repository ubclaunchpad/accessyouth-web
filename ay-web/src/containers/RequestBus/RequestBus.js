import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';

class RequestBus extends Component {

    render() {
        return (
            <div style={{width: "70vw", height: "60vw"}}>
                <h1 style={{padding: "15%"}}>
                    Currently the app does not support requesting 
                    the bus from the website. Download the iOS App 
                    to request the bus.
                </h1>
            </div>
        );
    }
}

export default RequestBus;