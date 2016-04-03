import React from 'react';
import Title from 'react-title-component';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import {blue500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBar from './containers/AppBar';
import AppLeftNav from './containers/AppLeftNav';
import AppTabsIcon from './components/layout/AppTabsIcon'
import AppTabs from './components/layout/AppTabs'

const style = {
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
        <div style={style.container}>
          {/*
          */}
          <AppBar />
          <AppLeftNav />
          <AppTabs />
          <AppTabsIcon />
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