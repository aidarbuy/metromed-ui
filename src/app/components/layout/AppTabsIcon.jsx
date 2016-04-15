// src/app/components/layout/AppTabsIcon.jsx
import React 
	from 'react';
import Tabs 
	from 'material-ui/lib/tabs/tabs';
import Tab
	from 'material-ui/lib/tabs/tab';
import FontIcon 
	from 'material-ui/lib/font-icon';
import HomeIcon 
	from 'material-ui/lib/svg-icons/action/home';
import AboutIcon 
	from 'material-ui/lib/svg-icons/action/info';
import ServicesIcon 
	from 'material-ui/lib/svg-icons/maps/local-hospital';
import DoctorsIcon 
	from 'material-ui/lib/svg-icons/action/face';
import PrimaryCareIcon 
	from 'material-ui/lib/svg-icons/action/description';
import MapIcon 
	from 'material-ui/lib/svg-icons/maps/place';
import VirtualIcon 
	from 'material-ui/lib/svg-icons/action/three-d-rotation';
import NavLink
  from 'react-router';

export default React.createClass({
  getInitialState(props) {
    var initIndex;
    const { router } = this.context;
    if (router.isActive('/')) {
      initIndex = 0
    } else if (router.isActive('/about')) {
      initIndex = 1
    } else if (router.isActive('/services')) {
      initIndex = 2
    } else if (router.isActive('/doctors')) {
      initIndex = 3
    } else if (router.isActive('/primary')) {
      initIndex = 4
    } else if (router.isActive('/map')) {
      initIndex = 5
    } else if (router.isActive('/virtual')) {
      initIndex = 6
    } else {
      initIndex = -1
    }
    return {initIndex};
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
        initialSelectedIndex={index}>
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