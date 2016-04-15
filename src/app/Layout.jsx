import React from 
  'react';
import Title from 
  'react-title-component';
import getMuiTheme from 
  'material-ui/lib/styles/getMuiTheme';
import * as Colors from 
  'material-ui/lib/styles/colors';
import {blue500} from 
  'material-ui/lib/styles/colors';
import MuiThemeProvider from 
  'material-ui/lib/MuiThemeProvider';
import AppBar from 
  './containers/AppBar';
import AppLeftNav from 
  './containers/AppLeftNav';
import AppTabsIcon from 
  './components/layout/AppTabsIcon';
import AppTabs from 
  './components/layout/AppTabs';
import AppFooter from 
  './components/layout/AppFooter';

import rawTheme from './themes/light';
// console.log(rawTheme.palette)
const muiTheme = getMuiTheme(rawTheme)
// console.info(muiTheme)

const styles = {
  container : {
    background:rawTheme.palette.canvasColor,
    textAlign:'center',
    paddingTop:0,
  },
};

export default React.createClass({
  // pass muiTheme down automatically
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  // Invoked once before the component is mounted
  // getInitialState() {
  // },
  // invoked before initial rendering
  componentWillMount() {
    let newMuiTheme = muiTheme
    // console.info(newMuiTheme)
    // prepare new appBar props
    // const cardText = {
      // color:Colors.yellow500,
      // textColor:Colors.green500,
      // height:56,
      // titleFontWeight:700,
      // padding:35,
    // }
    // overwrite newMuiTheme.appBar
    // newMuiTheme.cardText = cardText
    // overwrite this.state.muiTheme
    // this.setState({
    //   muiTheme:newMuiTheme,
    // });
  },
  // state or props changed
  // update context of childs
  getChildContext() {
    return {muiTheme}
  },
  // check this.props and this.state 
  // return a single child
  render() {
    // childs will get muiTheme via context
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          {/*
          */}
          <AppBar />
          <AppLeftNav />
          <AppTabs />
          <AppTabsIcon />
          <div style={{marginTop:20}}>
            {this.props.children}
          </div>
          <AppFooter />
        </div>
      </MuiThemeProvider>
    )
  }
})