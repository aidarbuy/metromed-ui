import React         from 'react';
import IconButton    from 'material-ui/lib/icon-button';
import Toolbar       from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup  from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle  from 'material-ui/lib/toolbar/toolbar-title';
import IconFacebook  from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconGoogle    from '../icons/IconGooglePlus';
import dataSocial    from '../../data/social';

const social = dataSocial.slice(0, 3);

const Icon = React.createClass({
  render() {
    switch (this.props.iconName) {
      case 'IconFacebook':
        return <IconFacebook styles={this.props.styles} />;
      case 'IconInstagram':
        return <IconInstagram styles={this.props.styles} />;
      case 'IconGoogle':
        return <IconGoogle styles={this.props.styles} />;
      default:
        return null;
    }
  }
});

export default () => (
  <Toolbar>
    <ToolbarGroup float="left" firstChild={true}>
      {social.map((icon, index) => (
        <a key={icon.name} href={icon.href}>
          <IconButton tooltip={icon.desc} 
            touch={true} 
            tooltipPosition="top-right"
            style={{height:56}}>
            <Icon iconName={icon.icon} styles={{hover:'green'}}/>
          </IconButton>
        </a>
      ))}
    </ToolbarGroup>
    <ToolbarGroup float="right" lastChild={true}>
      <ToolbarTitle 
        text="&copy; 2016 Amygdala LLC" 
        className="app-footer-title" />
    </ToolbarGroup>
  </Toolbar>
);