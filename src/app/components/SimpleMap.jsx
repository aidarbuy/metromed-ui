/* 
  src/app/components/SimpleMap.jsx 
*/

import React from 'react'
import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyCevAQFOgvKGgw1Rz2xACa7zvsk7hs4W-Q'

const options = {
  center: {
    lat: 39.116852, 
    lng:-77.539673
  },
  zoom: 11
}
      
export default React.createClass({
  componentDidMount() {
    GoogleMapsLoader.load((google) => {
      var map = new google.maps.Map(this.refs.map, options)
      var marker = new google.maps.Marker({
        map: map,
        position: options.center,
        title: 'Hello World!',
        animation: google.maps.Animation.DROP
      })
    })
  },
  render() {
    return (
      <section style={{width:'100%',height:400}}>
        <div ref="map" style={{height: "100%"}}></div>
      </section>
    );
  }
})