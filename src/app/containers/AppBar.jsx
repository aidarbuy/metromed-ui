import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

const styles = {
  menu: {
    color: 'red',
  }
}

const AppBarIconMenu = (props, { store }) => (
  <AppBar
    title="Urgent Care web application"
    iconElementLeft={
      <IconButton onTouchTap={() => store.dispatch({ type: 'TOGGLE_LEFTNAV' })}>
        <NavigationMenu/>
      </IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
);

AppBarIconMenu.contextTypes = {
  store: React.PropTypes.object
}

export default AppBarIconMenu;