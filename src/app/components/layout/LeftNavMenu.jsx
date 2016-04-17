// src/app/components/layout/AppLeftNavMenu.jsx
import React from 'react';

import Menu from 
  'material-ui/lib/menus/menu';
import MenuItem from 
  'material-ui/lib/menus/menu-item';
import { Link } from 
  'react-router';
import * as Colors from 
  'material-ui/lib/styles/colors';
import HomeIcon from 
  'material-ui/lib/svg-icons/action/home';
import AboutIcon from 
  'material-ui/lib/svg-icons/action/info';
import ServicesIcon from 
  'material-ui/lib/svg-icons/maps/local-hospital';
import DoctorsIcon from 
  'material-ui/lib/svg-icons/action/face';
import PrimaryCareIcon from 
  'material-ui/lib/svg-icons/action/description';
import MapIcon from 
  'material-ui/lib/svg-icons/maps/place';
import VirtualIcon from 
  'material-ui/lib/svg-icons/action/three-d-rotation';
import Divider from 
  'material-ui/lib/divider';
import AddressIcon from 
  'material-ui/lib/svg-icons/action/room';

import NavLink from './NavLink';

export default React.createClass({
  getInitialState() {
    const pathname = this.props.location.pathname;
    const initIndex = this.props.getInitIndex(pathname);
    return {initIndex};
  },

  handleTouchTap() {
    const route = this.props.location.pathname;
    // this.props.pushToRouter(route);
    this.props.dispatchAction({type:"TOGGLE_LEFTNAV"});
    this.props.dispatchAction({type:"UPDATE_ROUTE", route});
    const storeState = this.props.getStoreState();
    const storeRoute = storeState.router.route;
    console.log("LeftNavMenu storeRoute:", storeRoute);
  },

  render() {
    return (
      <Menu width={200}>
        <MenuItem primaryText="Home"
          leftIcon={<HomeIcon style={styles.icon} />} 
          containerElement={<Link to="/" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="About" value="/about" route="/about"
          leftIcon={<AboutIcon style={styles.icon} />} 
          containerElement={<NavLink to="/about" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Services" 
          leftIcon={<ServicesIcon style={styles.icon} />} 
          containerElement={<Link to="/services" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Doctors" 
          leftIcon={<DoctorsIcon style={styles.icon} />} 
          containerElement={<Link to="/doctors" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Primary Care" 
          leftIcon={<PrimaryCareIcon style={styles.icon} />} 
          containerElement={<Link to="/primary" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Map" 
          leftIcon={<MapIcon style={styles.icon} />} 
          containerElement={<Link to="/map" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Virtual Tour" 
          leftIcon={<VirtualIcon style={styles.icon} />} 
          containerElement={<Link to="/virtual" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
      </Menu>
    )
  }
});

const styles = {
  innerDiv : {
    paddingLeft: 50,
    color: Colors.cyan800,
    textAlign:'left',
  },
  icon : {
    fill: Colors.cyan600,
  }
};