import React from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

import HomeIcon from 'material-ui/lib/svg-icons/action/home'
import AboutIcon from 'material-ui/lib/svg-icons/action/info'
import ServicesIcon from 'material-ui/lib/svg-icons/places/spa'
import DoctorsIcon from 'material-ui/lib/svg-icons/action/face'
import PrimaryCareIcon from 'material-ui/lib/svg-icons/action/description'
import MapIcon from 'material-ui/lib/svg-icons/action/explore'
import VirtualIcon from 'material-ui/lib/svg-icons/action/three-d-rotation'

import Divider from 'material-ui/lib/divider'
import AddressIcon from 'material-ui/lib/svg-icons/action/room'

const innerDivStyle = {
  paddingLeft: 57
}

const ListSimple = (props, { store }) => (
  <div>
    <List style={{
      textAlign: 'left',
    }}>
      <ListItem 
        innerDivStyle={innerDivStyle}
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="Home" 
        leftIcon={ <HomeIcon /> } 
      />
      <ListItem 
        innerDivStyle={innerDivStyle}
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="About" 
        leftIcon={<AboutIcon />}
      />
      <ListItem 
        innerDivStyle={innerDivStyle}
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="Services" 
        leftIcon={<ServicesIcon />} 
      />
      <ListItem 
        innerDivStyle={innerDivStyle}
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="Doctors" 
        leftIcon={<DoctorsIcon />} 
      />
      <ListItem 
        innerDivStyle={innerDivStyle}
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="Primary Care" 
        leftIcon={<PrimaryCareIcon />} 
      />
      <ListItem 
        innerDivStyle={innerDivStyle}
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="Map" 
        leftIcon={<MapIcon />} 
      />
      <ListItem 
        innerDivStyle={innerDivStyle}
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="Virtual Tour" 
        leftIcon={<VirtualIcon />} 
      />
    </List>
    <Divider />
    <List>
      <ListItem 
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="952 Edwards Ferry Road NE" 
        rightIcon={<AddressIcon />} 
      />
      <ListItem 
        onTouchTap={()=>store.dispatch({ type: 'TOGGLE_LEFTNAV' })} 
        primaryText="Leesburg VA 20176" 
        rightIcon={<AddressIcon />} 
      />
    </List>
  </div>
);

ListSimple.contextTypes = {
  store: React.PropTypes.object
}

export default ListSimple;