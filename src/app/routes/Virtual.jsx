// src/app/routes/Virtual.jsx
import React from 'react';
import Helmet from 'react-helmet';

const scrHeight = window.screen.height
const height = scrHeight - (scrHeight / 3) - 114

export default React.createClass({
  render() {
    return (
      <div>
        <Helmet title="Virtual Tour - MetromedUC"/>

        <h3>Virtual Tour</h3>

        <h6>Explore our clinic through 360° virtual tour:</h6>

        <iframe 
          ref="iframe"
          src='https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435317827152!6m8!1m7!1sDV3R4lZfUPwAAAQqg2kDFw!2m2!1d39.116755!2d-77.539826!3f328!4f0!5f0.7820865974627469'
          style={{width:'100%', height:height}}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )
  }
});