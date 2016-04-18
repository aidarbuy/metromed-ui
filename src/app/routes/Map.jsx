// src/app/routes/Map.jsx
import React from 'react';
import Helmet from 'react-helmet';
import GoogleMaps from '../components/GoogleMaps';

export default React.createClass({
  render() {
    return (
      <div>
        <Helmet title="Location - Metromed UC"/>

        <h3>Our location</h3>

        <GoogleMaps/>
      </div>
    )
  }
});