// src/app/components/layout/AppTabsIcon.jsx
import React from 'react';
import NavLink from 'react-router';

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
  from 'material-ui/lib/svg-icons/social/people';
import PrimaryCareIcon 
  from 'material-ui/lib/svg-icons/action/description';
import MapIcon 
  from 'material-ui/lib/svg-icons/maps/place';
import VirtualIcon 
  from 'material-ui/lib/svg-icons/action/three-d-rotation';


export default React.createClass({
  getInitialState() {
    const pathname = this.props.location.pathname;
    const initIndex = this.props.getInitIndex(pathname);
    return {initIndex};
  },
  handleActive(event) {
    const { route } = event.props;
    this.props.pushToRouter(route);
    this.props.dispatchAction({type:"UPDATE_ROUTE", route});
    const storeState = this.props.getStoreState();
    const storeRoute = storeState.router.route;
    // console.log("AppTabsIcon storeRoute:", storeRoute);
  },
  render() {
    const index = this.state.initIndex;
    return (
      <Tabs className="app-tabs-icon" initialSelectedIndex={index}>
        <Tab route="/"
          icon={<HomeIcon className="AppTabsIcon-icon" />}
          onActive={this.handleActive}
        />
        <Tab route="/about"
          icon={<AboutIcon className="AppTabsIcon-icon" />}
          onActive={this.handleActive}
        />
        <Tab route="/services"
          icon={<ServicesIcon className="AppTabsIcon-icon" />}
          onActive={this.handleActive}
        />
        <Tab route="/doctors"
          icon={<DoctorsIcon className="AppTabsIcon-icon" />}
          onActive={this.handleActive}
        />
        <Tab route="/primary"
          icon={<PrimaryCareIcon className="AppTabsIcon-icon" />}
          onActive={this.handleActive}
        />
        <Tab route="/map"
          icon={<MapIcon className="AppTabsIcon-icon" />}
          onActive={this.handleActive}
        />
        <Tab route="/virtual"
          icon={<VirtualIcon className="AppTabsIcon-icon" />}
          onActive={this.handleActive}
        />
      </Tabs>
    )
  }
});