import React from 'react';

import ayLogo from '../../assets/images/ay-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={ayLogo} alt="Access Youth" />
    </div>
);

export default logo;