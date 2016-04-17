// src/app/routes/About.jsx

import React from 'react';
import Helmet from 'react-helmet';

import Paper from 'material-ui/lib/paper';

import Welcome from 
  '../components/about/Welcome';
import WhyMetromed from 
  '../components/about/WhyMetromed';

export default () => (
  <div>
    <Helmet title="About Us - Metromed UC"/>
    <div className="flex-container">
      <div className="flex-container-half">
        <Welcome/>
      </div>
      <div className="flex-container-half">
        <WhyMetromed/>
      </div>
    </div>
  </div>
)