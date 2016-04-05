import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import { cyan500 } from 'material-ui/lib/styles/colors'

export default React.createClass({
  getInitialState() {
    var tabIndex;
    if (this.context.router.isActive('/about')) {
      tabIndex = 1
    } else if (this.context.router.isActive('/services')) {
      tabIndex = 2
    } else if (this.context.router.isActive('/doctors')) {
      tabIndex = 3
    } else if (this.context.router.isActive('/primary')) {
      tabIndex = 4
    } else if (this.context.router.isActive('/map')) {
      tabIndex = 5
    } else if (this.context.router.isActive('/virtual')) {
      tabIndex = 6
    } else {
      tabIndex = 0
    }
    return { initIndex:tabIndex };
  },

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  handleActive(event) {
    const route = event.props.route
    // console.info("route property:", route)
    this.context.router.push(route)
  },

  render() {
    const index = this.state.initIndex
    return (
      <div style={{background:cyan500}}>
        <Tabs className="app-tabs"
          initialSelectedIndex={index}
        >
          <Tab 
            label="Home" 
            route="/" 
            onActive={this.handleActive}
          />
          <Tab 
            label="About Us" 
            route="/about" 
            onActive={this.handleActive}
          />
          <Tab 
            label="Services" 
            route="/services" 
            onActive={this.handleActive} 
          />
          <Tab 
            label="Doctors" 
            route="/doctors" 
            onActive={this.handleActive}
          />
          <Tab 
            label="Primary Care" 
            route="/primary" 
            onActive={this.handleActive}
          />
          <Tab 
            label="Map" 
            route="/map" 
            onActive={this.handleActive}
          />
          <Tab 
            label="Virtual Tour" 
            route="/virtual" 
            onActive={this.handleActive}
          />
        </Tabs>
      </div>
    )
  }
})