// About.jsx
import React from 'react'
import Paper from 
  'material-ui/lib/paper'

import WelcomeToMetromed from 
  '../components/about/WelcomeToMetromed'
import WhyMetromed from 
  '../components/about/WhyMetromed'

module.exports = () => (
  <div className="flex-container">
    <div className="flex-container-half">
      <WelcomeToMetromed/>
    </div>
    <div className="flex-container-half">
      <WhyMetromed/>
    </div>
  </div>
)