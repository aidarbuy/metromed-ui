import React 
  from 'react';
import IconButton 
  from 'material-ui/lib/icon-button';
import Toolbar 
  from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup 
  from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle 
  from 'material-ui/lib/toolbar/toolbar-title';
import IconFacebook 
  from '../icons/IconFacebook';
import IconInstagram 
  from '../icons/IconInstagram';
import IconGooglePlus 
  from '../icons/IconGooglePlus';
import { red500, green500, blue500, cyan500 } 
  from 'material-ui/lib/styles/colors';
import socialData 
  from '../../data/social';

const social = socialData.slice(0, 3);

export default () => (
  <Toolbar style={{marginTop:10}}>
    <ToolbarGroup float="left" firstChild={true}>
      {social.map((item, index) => (
        <a key={item.name} href={item.href}>
          <IconButton tooltip={item.desc} 
            touch={true} 
            tooltipPosition="top-right"
            style={{height:56}}>
            <IconComponent iconName={item.icon} 
              styles={{color:'red',hover:'green'}}/>
          </IconButton>
        </a>
      ))}
    </ToolbarGroup>
    <ToolbarGroup>
    </ToolbarGroup>
    <ToolbarGroup float="right" lastChild={true}>
      <ToolbarTitle 
        text="&copy; 2016 Amygdala LLC" 
        className="app-footer-title" />
    </ToolbarGroup>
  </Toolbar>
)

const IconComponent = React.createClass({
  render() {
    const { iconName } = this.props;
    if (iconName === 'IconFacebook')
      return <IconFacebook styles={this.props.styles} />;
    if (iconName === 'IconInstagram')
      return <IconInstagram styles={this.props.styles} />;
    if (iconName === 'IconGooglePlus')
      return <IconGooglePlus styles={this.props.styles} />;
  }
});