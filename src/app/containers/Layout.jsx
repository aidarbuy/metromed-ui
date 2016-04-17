// src/app/containers/Layout.jsx
import React from 'react';
import Helmet from 'react-helmet';

import getMuiTheme from 
  'material-ui/lib/styles/getMuiTheme';
import * as Colors from 
  'material-ui/lib/styles/colors';
import {blue500} from 
  'material-ui/lib/styles/colors';
import MuiThemeProvider from 
  'material-ui/lib/MuiThemeProvider';

import AppBar from 
  '../components/layout/AppBar';
import AppLeftNav from 
  '../containers/AppLeftNav';
import AppTabsIcon from 
  '../components/layout/AppTabsIcon';
import AppTabs from 
  '../components/layout/AppTabs';
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
    // const router = this.context.store.getState().router;
    let newMuiTheme = muiTheme;
    const toolbar = Object.assign({}, newMuiTheme.toolbar, {
      // backgroundColor: Colors.yellow500,
    });
    newMuiTheme.toolbar = toolbar;
    // overwrite this.state.muiTheme
    // this.setState({
      // muiTheme: newMuiTheme,
    // });
  },
  getChildContext() {
    // state or propNames changed, update context of childs
    return {muiTheme}
  },
  getInitIndex(pathname) {
    switch (pathname) {
      case "/"         : return 0;
      case "/about"    : return 1;
      case "/services" : return 2;
      case "/doctors"  : return 3;
      case "/primary"  : return 4;
      case "/map"      : return 5;
      case "/virtual"  : return 6;
      default          : return -1;
    }
  },
  pushToRouter(route) {
    this.context.router.push(route);
  },
  dispatchAction(action) {
    // console.log("Layout: dispatching an action");
    this.context.store.dispatch(action);
  },
  getStoreState() {
    return this.context.store.getState();
  },
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="layout-container">
          <Helmet title="Helmet title"/>
          <AppBar 
            dispatchAction={this.dispatchAction} 
          />
          <AppLeftNav 
            location={location}
            dispatchAction={this.dispatchAction}
            getStoreState={this.getStoreState}
            getInitIndex={this.getInitIndex}
            pushToRouter={this.pushToRouter}
          />
          <AppTabs 
            location={location} 
            dispatchAction={this.dispatchAction} 
            getInitIndex={this.getInitIndex}
            getStoreState={this.getStoreState}
            pushToRouter={this.pushToRouter}
          />
          <AppTabsIcon 
            location={location} 
            dispatchAction={this.dispatchAction} 
            getInitIndex={this.getInitIndex}
            getStoreState={this.getStoreState}
            pushToRouter={this.pushToRouter}
          />
          <div style={{marginTop:20}}>
            {this.props.children}
          </div>
          <AppFooter />
        </div>
      </MuiThemeProvider>
    )
  }
});