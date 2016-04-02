import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';
import HomeIcon from 'material-ui/lib/svg-icons/action/home'
import AboutIcon from 'material-ui/lib/svg-icons/action/info'
import ServicesIcon from 'material-ui/lib/svg-icons/places/spa'
import DoctorsIcon from 'material-ui/lib/svg-icons/action/face'
import PrimaryCareIcon from 'material-ui/lib/svg-icons/action/description'
import MapIcon from 'material-ui/lib/svg-icons/action/explore'
import VirtualIcon from 'material-ui/lib/svg-icons/action/three-d-rotation'

const TabsIcons = () => (
  <Tabs className="app-tabs-icon">
    <Tab icon={<HomeIcon />} />
    <Tab icon={<AboutIcon />} />
    <Tab icon={<ServicesIcon />} />
    <Tab icon={<DoctorsIcon />} />
    <Tab icon={<PrimaryCareIcon />} />
    <Tab icon={<MapIcon />} />
    <Tab icon={<VirtualIcon />} />
  </Tabs>
);

export default TabsIcons;