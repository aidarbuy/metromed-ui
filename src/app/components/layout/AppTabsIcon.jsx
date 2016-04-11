// src/app/components/layout/AppTabsIcon.jsx
import React 
	from 'react'
import Tabs 
	from 'material-ui/lib/tabs/tabs'
import Tab
	from 'material-ui/lib/tabs/tab'
import FontIcon 
	from 'material-ui/lib/font-icon'
import ActionFlightTakeoff 
	from 'material-ui/lib/svg-icons/action/flight-takeoff'
import HomeIcon 
	from 'material-ui/lib/svg-icons/action/home'
import AboutIcon 
	from 'material-ui/lib/svg-icons/action/info'
import ServicesIcon 
	from 'material-ui/lib/svg-icons/maps/local-hospital'
import DoctorsIcon 
	from 'material-ui/lib/svg-icons/action/face'
import PrimaryCareIcon 
	from 'material-ui/lib/svg-icons/action/description'
import MapIcon 
	from 'material-ui/lib/svg-icons/maps/place'
import VirtualIcon 
	from 'material-ui/lib/svg-icons/action/three-d-rotation'
import NavLink
  from 'react-router'

export default React.createClass({
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
    } else if (this.context.router.isActive('/telemed')) {
      tabIndex = -1
    } else {
      tabIndex = 0
    }
    return { initIndex:tabIndex };
  },

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  handleActive(event) {
    this.context.router.push(event.props.route)
  },

  render() {
    const index = this.state.initIndex
    return (
      <Tabs className="app-tabs-icon"
        initialSelectedIndex={index}
      >
        <Tab route="/"
          icon={<HomeIcon color='red'/>} 
          onActive={this.handleActive}
        />
        <Tab route="/about"
          icon={<AboutIcon />} 
          onActive={this.handleActive}
        />
        <Tab route="/services"
          icon={<ServicesIcon />} 
          onActive={this.handleActive}
        />
        <Tab route="/doctors"
          icon={<DoctorsIcon />} 
          onActive={this.handleActive}
        />
        <Tab route="/primary"
          icon={<PrimaryCareIcon />} 
          onActive={this.handleActive}
        />
        <Tab route="/map"
          icon={<MapIcon />} 
          onActive={this.handleActive}
        />
        <Tab route="/virtual"
          icon={<VirtualIcon />} 
          onActive={this.handleActive}
        />
      </Tabs>
    )
  }
})