// About.jsx
import React from 'react'
import Paper from 
  'material-ui/lib/paper'

import Welcome from 
  '../components/about/Welcome'
import WhyMetromed from 
  '../components/about/WhyMetromed'

module.exports = () => (
  <div className="flex-container">
    <div className="flex-container-half">
      <Welcome/>
    </div>
    <div className="flex-container-half">
      <WhyMetromed/>
    </div>
  </div>
)