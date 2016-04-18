// src/app/containers/AppLeftNav.jsx

import React, { Component } from 'react';

import LeftNav from 
  'material-ui/lib/left-nav';
import MenuItem from 
  'material-ui/lib/menus/menu-item';
import RaisedButton from 
  'material-ui/lib/raised-button';

import LeftNavCard from 
  '../components/layout/LeftNavCard';
import LeftNavMenu from 
  '../components/layout/LeftNavMenu';

export default React.createClass({
  contextTypes: {
    store: React.PropTypes.object
  },
  getInitialState() {
    const storeState = this.props.getStoreState();
    return {
      open:storeState.leftNav.open
    };
  },
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(()=> {
      this.setState({ 
        open: store.getState().leftNav.open 
      });
    });
    // console.log(this.props.location.pathname);
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  handleNavChange(event) {
    this.props.dispatchAction({type:"TOGGLE_LEFTNAV"});
  },
  render() {
    return (
      <div>
        <LeftNav ref="leftNav"
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={this.handleNavChange}
        >
          <LeftNavCard/>
          <LeftNavMenu 
            handleNavChange = {this.handleNavChange}
            location        = {this.props.location}
            getInitIndex    = {this.props.getInitIndex}
            pushToRouter    = {this.props.pushToRouter}
            getStoreState   = {this.props.getStoreState}
            dispatchAction  = {this.props.dispatchAction}
          />
        </LeftNav>
      </div>
    );
  }
});