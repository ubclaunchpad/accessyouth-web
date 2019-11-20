import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Bus</NavigationItem>
        <NavigationItem link="/requestBus">Request Bus</NavigationItem>
    </ul>
);

export default navigationItems;