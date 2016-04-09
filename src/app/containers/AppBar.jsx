import React from 
  'react'
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
import { Link } from 
  'react-router'

export default () => (
  <AppBar
    iconElementLeft={
      <IconButton onTouchTap={() => 
        store.dispatch({ 
          type:'TOGGLE_LEFTNAV'
        })
      }>
        <NavigationMenu/>
      </IconButton>
    }
    title="Metromed Urgent Care"
    iconElementRight={
      <IconMenu 
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal:'right', vertical:'top'}}
        anchorOrigin={{horizontal:'right', vertical:'top'}}
      >
        <Link to="telemed">
          <MenuItem primaryText="Telemed" />
        </Link>
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  >
  </AppBar>
)