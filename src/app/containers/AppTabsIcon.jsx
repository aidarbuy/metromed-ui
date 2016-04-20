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
  contextTypes: {
    store: React.PropTypes.object,
  },
  getInitialState() {
    const { store } = this.context;
    const state = store.getState().appTabs;
    return { initIndex: state.initIndex };
  },
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState().appTabs;
      this.setState({ initIndex: state.initIndex });
      // this.render();
    });
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  handleChange(value) {
    const route = this.props.getRouteValue(value);
    this.props.pushToRouter(route);
    this.context.store.dispatch({type:"UPDATE_ROUTE", route});
    const storeState = this.context.store.getState();
    this.setState({ initIndex: value });
  },
  render() {
    const initIndex = this.state.initIndex;
    return (
      <Tabs className="app-tabs-icon"
        initialSelectedIndex={initIndex}
        value={this.state.tabsValue}
        onChange={this.handleChange}
      >
        <Tab value={0}
          icon={<HomeIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={1}
          icon={<AboutIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={2}
          icon={<ServicesIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={3}
          icon={<DoctorsIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={4}
          icon={<PrimaryCareIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={5}
          icon={<MapIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={6}
          icon={<VirtualIcon 
            className="AppTabsIcon-icon" />}
        />
      </Tabs>
    )
  }
});