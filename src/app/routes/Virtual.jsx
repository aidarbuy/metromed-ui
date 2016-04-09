/*
  src/app/routes/Virtual.jsx
*/

import React from 'react'

const scrHeight = window.screen.height
const height = scrHeight - (scrHeight / 3) - 114

const styles = {
  iframe : {
    width:'100%',
    height:height,
  }
}

export default React.createClass({
  componentDidMount() {
    // console.log(this.refs.iframe)
  },
  render() {
    return (
      <div>
        <h3>Virtual Tour</h3>

        <h5>
          Explore our clinic through 
          interactive 360° virtual tour:
        </h5>

        <iframe 
          ref="iframe"
          src='https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435317827152!6m8!1m7!1sDV3R4lZfUPwAAAQqg2kDFw!2m2!1d39.116755!2d-77.539826!3f328!4f0!5f0.7820865974627469'
          style={styles.iframe}
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    )
  }
})