import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
import HomeIcon from 'material-ui/lib/svg-icons/action/home'
import AboutIcon from 'material-ui/lib/svg-icons/action/info'
import ServicesIcon from 'material-ui/lib/svg-icons/places/spa'
import DoctorsIcon from 'material-ui/lib/svg-icons/action/face'
import PrimaryCareIcon from 'material-ui/lib/svg-icons/action/description'
import MapIcon from 'material-ui/lib/svg-icons/action/explore'
import VirtualIcon from 'material-ui/lib/svg-icons/action/three-d-rotation'
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff'

const styles = {
  tab: {
    marginRight: 'auto',
  },
  icon: {
    background: 'green',
  }
}

module.exports = () => (
  <Tabs>
    <Tab style={styles.tab}
      icon={<HomeIcon style={styles.icon} />}
      label="Home"
    />
    <Tab style={styles.tab}
      icon={<AboutIcon />}
      label="About"
    />
    <Tab style={styles.tab}
      icon={<ServicesIcon />}
      label="Services"
    />
    <Tab
      icon={<ActionFlightTakeoff />}
      label="RECENTS"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="FAVORITES"
    />
    <Tab
      icon={<FontIcon className="material-icons">person_pin</FontIcon>}
      label="NEARBY"
    />
  </Tabs>
);