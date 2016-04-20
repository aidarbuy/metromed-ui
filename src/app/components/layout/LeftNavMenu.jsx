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
  'material-ui/lib/svg-icons/social/people';
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
  handleTouchTap(route, index) {
    this.props.pushToRouter(route);
    // this.props.dispatchAction({type:"TOGGLE_LEFTNAV"});
    this.props.dispatchAction({type:"UPDATE_ROUTE", route});
    this.props.dispatchAction({type:"UPDATE_INDEX", index});
  },
  render() {
    return (
      <Menu width={200}>
        <MenuItem primaryText="Home"
          leftIcon={<HomeIcon style={styles.icon} />} 
          containerElement={<Link to="/" />}
          onTouchTap={() => {this.handleTouchTap("/", 0)}} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="About Us"
          leftIcon={<AboutIcon style={styles.icon} />} 
          containerElement={<NavLink to="/about" />}
          onTouchTap={() => {this.handleTouchTap("/about", 1)}} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Services" 
          leftIcon={<ServicesIcon style={styles.icon} />} 
          containerElement={<Link to="/services" />}
          onTouchTap={() => {this.handleTouchTap("/services", 2)}}
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Doctors" 
          leftIcon={<DoctorsIcon style={styles.icon} />} 
          containerElement={<Link to="/doctors" />}
          onTouchTap={() => {this.handleTouchTap("/doctors", 3)}}
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Primary Care" 
          leftIcon={<PrimaryCareIcon style={styles.icon} />} 
          containerElement={<Link to="/primary" />}
          onTouchTap={() => {this.handleTouchTap("/primary", 4)}}
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Location" 
          leftIcon={<MapIcon style={styles.icon} />} 
          containerElement={<Link to="/location" />}
          onTouchTap={() => {this.handleTouchTap("/location", 5)}}
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem primaryText="Virtual Tour" 
          leftIcon={<VirtualIcon style={styles.icon} />} 
          containerElement={<Link to="/virtual" />}
          onTouchTap={() => {this.handleTouchTap("/virtual", 6)}}
          innerDivStyle={styles.innerDiv}
        />
      </Menu>
    )
  }
});

const styles = {
  innerDiv : {
    width: 'auto',
    paddingLeft: 45,
    // color: Colors.blueGrey500,
    color: Colors.cyan700,
    textAlign:'left',
  },
  icon : {
    marginLeft: 10,
    // fill: Colors.blueGrey500,
    fill: Colors.cyan700,
  }
};