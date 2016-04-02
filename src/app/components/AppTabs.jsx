import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

const styles = {
  tab: {
    color: 'white',
    fontWeight: 300,
  },
};

const handleActive = (tab) => {
  console.debug(`
    A tab with this route property 
    ${tab.props.route} was activated.
  `);
}

module.exports = () => (
  <div style={{
    background: '#00bcd4', 
  }}>
    <Tabs className="app-tabs" style={{
      maxWidth: 1000, 
      marginLeft: 'auto',
      marginRight: 'auto',

    }}
      tabItemContainerStyle={{}}
    >
      <Tab label="Home" style={styles.tab} 
        route="/" 
      />
      <Tab label="About Us" style={styles.tab} 
        route="/about" 
      />
      <Tab label="Services" style={styles.tab} onActive={handleActive} 
        route="/services" 
      />
      <Tab label="Doctors" style={styles.tab} 
        route="/doctors" 
      />
      <Tab label="Primary Care" style={styles.tab} 
        route="/primary" 
      />
      <Tab label="Map" style={styles.tab} 
        route="/map" 
      />
      <Tab label="Virtual Tour" style={styles.tab} 
        route="/virtual" 
      />
    </Tabs>
  </div>
);