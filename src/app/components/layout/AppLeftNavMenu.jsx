import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { Link } from 'react-router'
import { cyan800 } from 'material-ui/lib/styles/colors'
import HomeIcon from 'material-ui/lib/svg-icons/action/home'
import AboutIcon from 'material-ui/lib/svg-icons/action/info'
import ServicesIcon from 'material-ui/lib/svg-icons/places/spa'
import DoctorsIcon from 'material-ui/lib/svg-icons/action/face'
import PrimaryCareIcon from 'material-ui/lib/svg-icons/action/description'
import MapIcon from 'material-ui/lib/svg-icons/action/explore'
import VirtualIcon from 'material-ui/lib/svg-icons/action/three-d-rotation'
import Divider from 'material-ui/lib/divider'
import AddressIcon from 'material-ui/lib/svg-icons/action/room'
import NavLink from './NavLink';

const menuItemColor = cyan800

const styles = {
  innerDiv: {
    paddingLeft:50,
    // borderRightWidth:3,
    // borderRightStyle:'solid',
    // borderRightColor:cyan800,
    color:menuItemColor,
  },
  icon: {
    fill:menuItemColor,
  },
}

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object,
    router: React.PropTypes.object
  },

  getInitialState() {
    var tabIndex;
    if (this.context.router.isActive('/about')) {
      tabIndex = 1
    } else if (this.context.router.isActive('/services')) {
      tabIndex = 2
    } else if (this.context.router.isActive('/doctors')) {
      tabIndex = 3
    } else if (this.context.router.isActive('/primary')) {
      tabIndex = 4
    } else if (this.context.router.isActive('/map')) {
      tabIndex = 5
    } else if (this.context.router.isActive('/virtual')) {
      tabIndex = 6
    } else {
      tabIndex = 0
    }
    return { initIndex:tabIndex };
  },

  handleTouchTap(event) {
    this.context.store.dispatch({ type: 'TOGGLE_LEFTNAV' })
  },

  render() {
    return (
      <div>
        <MenuItem
          primaryText="Home" 
          leftIcon={<HomeIcon style={styles.icon} />} 
          containerElement={<Link to="/" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem focusState="focused"
          primaryText="About" 
          leftIcon={<AboutIcon style={styles.icon} />} 
          containerElement={<NavLink to="/about" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem 
          primaryText="Services" 
          leftIcon={<ServicesIcon style={styles.icon} />} 
          containerElement={<Link to="/services" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem 
          primaryText="Doctors" 
          leftIcon={<DoctorsIcon style={styles.icon} />} 
          containerElement={<Link to="/doctors" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem 
          primaryText="Primary Care" 
          leftIcon={<PrimaryCareIcon style={styles.icon} />} 
          containerElement={<Link to="/primary" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem 
          primaryText="Map" 
          leftIcon={<MapIcon style={styles.icon} />} 
          containerElement={<Link to="/map" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
        <MenuItem 
          primaryText="Virtual Tour" 
          leftIcon={<VirtualIcon style={styles.icon} />} 
          containerElement={<Link to="/virtual" />}
          onTouchTap={this.handleTouchTap} 
          innerDivStyle={styles.innerDiv}
        />
      </div>
    )
  }
})