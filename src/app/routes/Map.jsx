// src/app/routes/Map.jsx

import React from 
  'react'

import GoogleMaps from 
  '../components/GoogleMaps'

export default React.createClass({
  render() {
    return (
      <div>

        <h3>Our location</h3>

        <GoogleMaps/>

      </div>
    )
  }
})