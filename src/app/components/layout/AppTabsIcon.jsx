import React 
	from 'react';
import Tabs 
	from 'material-ui/lib/tabs/tabs';
import Tab
	from 'material-ui/lib/tabs/tab';
import FontIcon 
	from 'material-ui/lib/font-icon';
import ActionFlightTakeoff 
	from 'material-ui/lib/svg-icons/action/flight-takeoff';
import HomeIcon 
	from 'material-ui/lib/svg-icons/action/home'
import AboutIcon 
	from 'material-ui/lib/svg-icons/action/info'
import ServicesIcon 
	from 'material-ui/lib/svg-icons/places/spa'
import DoctorsIcon 
	from 'material-ui/lib/svg-icons/action/face'
import PrimaryCareIcon 
	from 'material-ui/lib/svg-icons/action/description'
import MapIcon 
	from 'material-ui/lib/svg-icons/action/explore'
import VirtualIcon 
	from 'material-ui/lib/svg-icons/action/three-d-rotation'
import NavLink
  from 'react-router';

export default React.createClass({

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  handleActive(event) {
    const route = event.props.route
    console.info("route property:", route)
    this.context.router.push(route)
  },

  render() {
    return (
      <Tabs>
        <Tab 
          icon={<HomeIcon />} 
          route="/"
          onActive={this.handleActive}
        />
        <Tab 
          icon={<AboutIcon />} 
          route="/about"
          onActive={this.handleActive}
        />
        <Tab 
          icon={<ServicesIcon />} 
          route="/services"
          onActive={this.handleActive}
        />
        <Tab 
          icon={<DoctorsIcon />} 
          route="/doctors"
          onActive={this.handleActive}
        />
        <Tab 
          icon={<PrimaryCareIcon />} 
          route="/primary"
          onActive={this.handleActive}
        />
        <Tab 
          icon={<MapIcon />} 
          route="/map"
          onActive={this.handleActive}
        />
        <Tab 
          icon={<VirtualIcon />} 
          route="/virtual"
          onActive={this.handleActive}
        />
      </Tabs>
    )
  }
})