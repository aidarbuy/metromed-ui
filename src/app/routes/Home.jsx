// src/app/routes/Home.jsx
import React from 'react';
import Helmet from 'react-helmet';

import Toolbar from 
  'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 
  'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 
  'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 
  'material-ui/lib/toolbar/toolbar-title';
import FontIcon from 
  'material-ui/lib/font-icon';
import RaisedButton from 
  'material-ui/lib/raised-button';

import LayerSlider from 
  '../components/home/LayerSlider';
import TopBar from 
  '../components/home/TopBar';
import CallToAction from 
  '../components/home/CallToAction';
import CustomServices from 
  '../components/home/CustomServices';
import ArticlesCards from 
  '../components/home/ArticlesCards';
import Testimonials from 
  '../components/home/Testimonials';

const styles = {
  flexContHalf: {
    marginTop:25,
    // margin:1,
    padding:10,
    // border:'1px dashed red',
    boxSizing:'border-box',
    // background:'red'
  },
}

module.exports = () => (
  <div>
    <Helmet title="Metromed Urgent Care"/>
    <LayerSlider/>
    <TopBar/>
    <CallToAction/>
    <CustomServices/>
    <div className='flex-container'>
      <div 
        className='flex-container-half'
        style={styles.flexContHalf}
      >
        <ArticlesCards />
      </div>
      <div 
        className='flex-container-half'
        style={styles.flexContHalf}
      >
        <Testimonials/>
      </div>
    </div>
  </div>
)