// src/app/components/TeleMed.jsx

import React from 'react'

import Card from 
  'material-ui/lib/card/card'
import CardActions from 
  'material-ui/lib/card/card-actions'
import CardHeader from 
  'material-ui/lib/card/card-header'
import CardMedia from 
  'material-ui/lib/card/card-media'
import CardTitle from 
  'material-ui/lib/card/card-title'
import FlatButton from 
  'material-ui/lib/flat-button'
import CardText from 
  'material-ui/lib/card/card-text'

/**
 * Put variables in global scope to make 
 * them available to the browser console.
 */

var constraints = window.constraints = {
  audio: false,
  video: true
};

// var errorElement = document.querySelector('#errorMsg');

export default React.createClass({
  componentDidMount() {
    // this.getUserMedia()
  },

  getUserMedia() {
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      var videoTracks = stream.getVideoTracks()
      console.info('Got stream:', constraints)
      console.info('Device:', videoTracks[0].label)
      stream.onended = () => {
        console.log('Stream ended')
      }
      // make variable available to browser console
      window.stream = stream;
      var video = this.refs.video
      video.srcObject = stream
    })
    .catch(this.errorHandler)
  },

  errorHandler(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      errorMsg(
        'The resolution ' + 
        constraints.video.width.exact + 
        'x' +
        constraints.video.width.exact + 
        ' px is not supported by your device.'
      );
    } else if (error.name === 'PermissionDeniedError') {
      errorMsg(
        'Permissions have not been granted ' + 
        'to use your camera and microphone, ' + 
        'you need to allow the page access ' + 
        'to your devices in order for the demo to work.'
      );
    }
    errorMsg('getUserMedia error: ' + error.name, error);
  },

  errorMsg(msg, error) {
    video.innerHTML += '<p>' + msg + '</p>'
    if (typeof error !== 'undefined') {
      console.error(error)
    }
  },

  render() {
    return (
      <Card> 
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"
        />
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <video ref="video" autoPlay></video>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
})