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

export default class AppLeftNav extends Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  constructor(props, { store }) {
    super(props);
    const storeState = this.props.getStoreState();
    this.state = {
      open:storeState.leftNav.open
    };
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(()=> {
      // an action dispatched, get state from lefNav.open
      this.setState({ open: store.getState().leftNav.open })
    });
    // console.log(this.props.location.pathname);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleNavChange = (event) => {
    this.props.dispatchAction({type:"TOGGLE_LEFTNAV"});
    // console.log(event);

    // console.debug("============== AppLeftNav ==============");

    // console.debug('Sending "CLOSE_LEFTNAV" action to store.');
    // this.context.store.dispatch({type:"CLOSE_LEFTNAV"});

    // console.debug('Sending "UPDATE_ROUTE" action and route.');
    // this.context.store.dispatch({type:"UPDATE_ROUTE", route});

    // const router = this.context.store.getState().router;
    // const routeString = router.route;
    // console.info("New route is", routeString);
  };

  render() {
    const { store } = this.context;
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
};