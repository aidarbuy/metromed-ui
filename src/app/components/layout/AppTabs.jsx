import React from 
  'react';
import Tabs from 
  'material-ui/lib/tabs/tabs';
import Tab from 
  'material-ui/lib/tabs/tab';
import { cyan500 } from 
  'material-ui/lib/styles/colors';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    var initIndex;
    const { isActive } = this.context.router;
    if (isActive('/about')) {
      initIndex = 1
    } else if (isActive('/services')) {
      initIndex = 2
    } else if (isActive('/doctors')) {
      initIndex = 3
    } else if (isActive('/primary')) {
      initIndex = 4
    } else if (isActive('/map')) {
      initIndex = 5
    } else if (isActive('/virtual')) {
      initIndex = 6
    } else {
      initIndex = 0
    }
    return {initIndex};
  },
  handleActive(event) {
    const route = event.props.route
    // console.info("route property:", route)
    this.context.router.push(route)
  },
  render() {
    const { initIndex } = this.state;
    return (
      <div style={{background:cyan500}}>
        <Tabs className="app-tabs"
          initialSelectedIndex={initIndex}
        >
          <Tab label="Home" 
            route="/" 
            onActive={this.handleActive}
          />
          <Tab label="About Us" 
            route="/about" 
            onActive={this.handleActive}
          />
          <Tab label="Services" 
            route="/services" 
            onActive={this.handleActive} 
          />
          <Tab label="Doctors" 
            route="/doctors" 
            onActive={this.handleActive}
          />
          <Tab label="Primary Care" 
            route="/primary" 
            onActive={this.handleActive}
          />
          <Tab label="Map" 
            route="/map" 
            onActive={this.handleActive}
          />
          <Tab label="Virtual Tour" 
            route="/virtual" 
            onActive={this.handleActive}
          />
        </Tabs>
      </div>
    )
  }
})