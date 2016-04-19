// src/app/components/layout/AppTabs.jsx
import React from 'react';

import Tabs from 
  'material-ui/lib/tabs/tabs';
import Tab from 
  'material-ui/lib/tabs/tab';
import * as Colors from 
  'material-ui/lib/styles/colors';

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
    const storeRoute = this.props.getStoreState().router.route;
    console.log("AppTabs storeRoute:", storeRoute);
  },
  render() {
    const { initIndex } = this.state;
    return (
      <div style={{background:Colors.cyan500}}>
        <Tabs className="app-tabs"
          initialSelectedIndex={initIndex}
        >
          <Tab label="Home" 
            route="/" 
            onActive={this.handleActive}
          />
          <Tab label="About Us" 
            route="/about" 
            onActive={this.handleActive}
          />
          <Tab label="Services" 
            route="/services" 
            onActive={this.handleActive} 
          />
          <Tab label="Doctors" 
            route="/doctors" 
            onActive={this.handleActive}
          />
          <Tab label="Primary Care" 
            route="/primary" 
            onActive={this.handleActive}
          />
          <Tab label="Map" 
            route="/location" 
            onActive={this.handleActive}
          />
          <Tab label="Virtual Tour" 
            route="/virtual" 
            onActive={this.handleActive}
          />
        </Tabs>
      </div>
    )
  }
})