// src/app/components/layout/AppBar.jsx
import React from 'react';
import { Link } from 'react-router';

import AppBar from 
  'material-ui/lib/app-bar';
import IconButton from 
  'material-ui/lib/icon-button';
import LeftIcon from 
  'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 
  'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 
  'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 
  'material-ui/lib/menus/menu-item';

const titles = [
  "Metromed Urgent Care",
  "(703)-687-4158",
  "952 Edwards Ferry Rd NE, Leesburg, VA 20176",
  "info@metromeduc.com",
];

export default React.createClass({
  contextTypes: {
    store: React.PropTypes.object
  },
  getInitialState() {
    var storeState = this.props.getStoreState();
    return { 
      title: storeState.appBar.title,
    };
  },
  handleTouchTap() {
    this.props.dispatchAction({type:'TOGGLE_LEFTNAV'});
  },
  handleTitleTouchTap() {
    var storeState = this.props.getStoreState();
    var index = storeState.appBar.index;
    if (index > 3) index = 0;
    this.props.dispatchAction({
      type:"UPDATE_APPBARTITLE",
      title:titles[index],
      index:++index,
    });
    storeState = this.props.getStoreState();
    this.setState({ title: storeState.appBar.title });
  },
  locationReload() {
    location.reload();
  },
  render() {
    // console.debug(this.context.store.getState());
    return (
      <AppBar 
        showMenuIconButton={true}
        iconElementLeft={
          <IconButton onTouchTap={this.handleTouchTap}>
            <LeftIcon />
          </IconButton>
        }

        title={this.state.title}
        onTitleTouchTap={this.handleTitleTouchTap}

        iconElementRight={
          <IconMenu 
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal:'right', vertical:'top'}}
            anchorOrigin={{horizontal:'right', vertical:'top'}}
          >
            <MenuItem primaryText="Reload this page" 
              onTouchTap={this.locationReload}
            />
            {/*
            <Link to="telemed">
              <MenuItem primaryText="Telemed" />
            </Link>
            <Link to="mui-theme">
              <MenuItem primaryText="UI Theme" />
            </Link>
            <Link to="router">
              <MenuItem primaryText="Router" />
            </Link>            
            <Link to="context">
              <MenuItem primaryText="Context" />
            </Link>            
            */}
          </IconMenu>
        }
      />
    )
  }
});