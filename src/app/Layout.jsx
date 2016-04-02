import React from 'react';
import Title from 'react-title-component';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBar from './containers/AppBar';
import AppLeftNav from './containers/AppLeftNav';
import AppTabsIcon from './components/AppTabsIcon'
import AppTabs from './components/AppTabs'
// import AppTabsIconText from './components/AppTabsIconText'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar />
          <AppLeftNav />
          <AppTabsIcon />
          <AppTabs />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

Layout.contextTypes = {
  store: React.PropTypes.object
}

export default Layout