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

function handleActive(tab) {
  console.debug(`A tab with this route property ${tab.props.route} was activated.`);
}

const TabsSimple = () => (
  <Tabs className="app-tabs">
    <Tab label="Home" route="/" style={styles.tab} />
    <Tab label="About Us" route="/about" style={styles.tab} />
    <Tab label="Services" route="/services" onActive={handleActive} style={styles.tab} />
    <Tab label="Doctors" route="/doctors" style={styles.tab} />
    <Tab label="Primary Care" route="/primary" style={styles.tab} />
    <Tab label="Map" route="/map" style={styles.tab} />
    <Tab label="Virtual Tour" route="/virtual" style={styles.tab} />
  </Tabs>
);

export default TabsSimple;