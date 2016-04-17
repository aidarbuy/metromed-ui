// src/app/containers/AppBar.jsx
import React from 'react';
import { Link } from 'react-router';

import AppBar from 
  'material-ui/lib/app-bar'
import IconButton from 
  'material-ui/lib/icon-button'
import NavigationMenu from 
  'material-ui/lib/svg-icons/navigation/menu'
import IconMenu from 
  'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 
  'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 
  'material-ui/lib/menus/menu-item'

export default React.createClass({
  render() {
    return (
      <AppBar
        iconElementLeft={
          <IconButton onTouchTap={() => 
            this.props.dispatchAction({type:'TOGGLE_LEFTNAV'})}>
            <NavigationMenu/>
          </IconButton>
        }
        title="Metromed Urgent Care"
        iconElementRight={
          <IconMenu 
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal:'right', vertical:'top'}}
            anchorOrigin={{horizontal:'right', vertical:'top'}}>
            <Link to="telemed">
              <MenuItem primaryText="Telemed" />
            </Link>
            <Link to="mui-theme">
              <MenuItem primaryText="MUI Theme" />
            </Link>
            <Link to="router">
              <MenuItem primaryText="Router" />
            </Link>            
            <Link to="context">
              <MenuItem primaryText="Context" />
            </Link>            
          </IconMenu>
        }
      />
    )
  }
});