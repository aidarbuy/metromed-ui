// src/app/containers/Layout.jsx
import React from 'react';

import getMuiTheme from 
  'material-ui/lib/styles/getMuiTheme';
import * as Colors from 
  'material-ui/lib/styles/colors';
import {blue500} from 
  'material-ui/lib/styles/colors';
import MuiThemeProvider from 
  'material-ui/lib/MuiThemeProvider';

import AppBar from 
  './AppBar';
import AppLeftNav from 
  './AppLeftNav';
import AppTabs from 
  '../components/layout/AppTabs';
import AppTabsIcon from 
  './AppTabsIcon';
import AppFooter from 
  '../components/layout/AppFooter';

import rawTheme from '../themes/light';
// import rawTheme from '../themes/dark';
const muiTheme = getMuiTheme(rawTheme)

export default React.createClass({
  contextTypes: {
    store:    React.PropTypes.object,
    location: React.PropTypes.object,
    router:   React.PropTypes.object,
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  componentWillMount() {
    let newMuiTheme = muiTheme;
    const leftNav = { ...newMuiTheme.leftNav,
      // color: Colors.cyan700,
    };
    newMuiTheme.leftNav = leftNav;
    // overwrite this.state.muiTheme
    // this.setState({
      // muiTheme: newMuiTheme,
    // });
  },
  getInitialState() {
    const route = "/" + this.props.location.pathname;
    const index = this.getInitIndex(route);
    this.context.store.dispatch({type:"UPDATE_ROUTE", route});
    this.context.store.dispatch({type:"UPDATE_INDEX", index});
    const storeState = this.context.store.getState();
    // console.debug(storeState);
    return null;
  },
  getChildContext() {
    // state or propNames changed, 
    // update context of childs
    return {muiTheme}
  },
  getRouteValue(index) {
    switch (index) {
      case 0  : return "/";
      case 1  : return "/about";
      case 2  : return "/services";
      case 3  : return "/doctors";
      case 4  : return "/primary";
      case 5  : return "/location";
      case 6  : return "/virtual";
      default : return "/";
    }
  },
  getInitIndex(pathname) {
    switch (pathname) {
      case "/doctors/roshelle-beckwith" : return 3;
      case "/doctors/matthew-beckwith"  : return 3;
      case "/doctors/patricia-micozzi"  : return 3;
      case "/doctors/brian-rader"       : return 3;
      case "/"          : return 0;
      case "/about"     : return 1;
      case "/services"  : return 2;
      case "/doctors"   : return 3;
      case "/doctors/2" : return 3;
      case "/doctors/3" : return 3;
      case "/doctors/4" : return 3;
      case "/primary"   : return 4;
      case "/location"  : return 5;
      case "/virtual"   : return 6;
      default           : return 0;
    }
  },
  pushToRouter(route) {
    this.context.router.push(route);
  },
  dispatchAction(action) {
    this.context.store.dispatch(action);
  },
  getStoreState() {
    return this.context.store.getState();
  },
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="layout-container">
          <AppBar 
            dispatchAction = {this.dispatchAction} 
            getStoreState  = {this.getStoreState}
          />
          <AppLeftNav 
            location={location}
            dispatchAction = {this.dispatchAction}
            getStoreState  = {this.getStoreState}
            getInitIndex   = {this.getInitIndex}
            pushToRouter   = {this.pushToRouter}
          />
          <AppTabs 
            location={location} 
            dispatchAction = {this.dispatchAction} 
            getInitIndex   = {this.getInitIndex}
            getStoreState  = {this.getStoreState}
            pushToRouter   = {this.pushToRouter}
            getRouteValue  = {this.getRouteValue}
          />
          <AppTabsIcon 
            location={location} 
            dispatchAction = {this.dispatchAction} 
            getInitIndex   = {this.getInitIndex}
            getStoreState  = {this.getStoreState}
            pushToRouter   = {this.pushToRouter}
            getRouteValue  = {this.getRouteValue}
          />
          {this.props.children}
          <AppFooter />
        </div>
      </MuiThemeProvider>
    )
  }
});