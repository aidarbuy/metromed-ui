/**
 * src/app/components/TeleMed.jsx
 */

import React from 'react';

import Card from 
  'material-ui/lib/card/card';
import CardActions from 
  'material-ui/lib/card/card-actions';
import CardHeader from 
  'material-ui/lib/card/card-header';
import CardMedia from 
  'material-ui/lib/card/card-media';
import CardTitle from 
  'material-ui/lib/card/card-title';
import RaisedButton from 
  'material-ui/lib/raised-button';
import CardText from 
  'material-ui/lib/card/card-text';
import * as Colors from 
  'material-ui/lib/styles/Colors';

/**
 * Put variables in global scope to make 
 * them available to the browser console.
 */

// Stream constraints
var constraints = window.constraints = {
  audio: false,
  video: true
};
// Global vars
var startTime;
var localStream;
var pc1;
var pc2;
var offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1
};
// Global vars for buttons
var startButton;
var callButton;
var hangupButton;
var stopButton;
// Global vars for streams
var localVideo;
var remoteVideo;
var videoTracks;
var audioTracks;
var styles;


// GET STREAM
function start() {
  trace('Requesting local stream')
  this.setState({startButtonDisabled:true})

  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  })
  .then((stream) => {
    trace('Received local stream')
    localVideo.srcObject = stream
    localStream = stream
    this.setState({callButtonDisabled:false})
    this.setState({stopButtonDisabled:false})
  })
  .catch(function(e) {
    alert('getUserMedia() error: ' + e.name)
  })
}


// MAKE A VIDEO CALL
function call() {
  console.debug('MAKE A VIDEO CALL')

  // disable call and hangup buttons
  this.setState({callButtonDisabled:true})
  this.setState({hangupButtonDisabled:false})

  trace('Starting call')
  startTime = window.performance.now();

  // print video and audio tracks
  videoTracks = localStream.getVideoTracks();
  audioTracks = localStream.getAudioTracks();
  if (videoTracks.length > 0) {
    trace('Using video device: ' + videoTracks[0].label);
  }
  if (audioTracks.length > 0) {
    trace('Using audio device: ' + audioTracks[0].label);
  }

  var config = {
    iceServers: [
      {url: "stun:stun.l.google.com:19305"},
      {url: "stun:23.21.150.121"},
      {url: "stun:stun.1.google.com:19302"},
    ]
  };

  pc1 = new RTCPeerConnection(config);
  trace('Created local peer connection object pc1');
  pc1.onicecandidate = (e) => onIceCandidate(pc1, e);

  pc2 = new RTCPeerConnection(config);
  trace('Created remote peer connection object pc2');
  pc2.onicecandidate = (e)=> onIceCandidate(pc2, e);

  pc1.oniceconnectionstatechange = (e)=> onIceStateChange(pc1, e);
  pc2.oniceconnectionstatechange = (e)=> onIceStateChange(pc2, e);

  pc2.onaddstream = gotRemoteStream;

  pc1.addStream(localStream);
  trace('Added local stream to pc1');

  trace('pc1 createOffer start');
  pc1.createOffer(offerOptions)
  .then((desc) => onCreateOfferSuccess(desc)) 
  .catch((error) => onCreateSessionDescriptionError(error));
}


function onCreateOfferSuccess(desc) {
  console.debug('Received offer from pc1')
  trace('Offer from pc1\n' + desc.sdp);

  trace('pc1 setLocalDescription start');
  pc1.setLocalDescription(desc)
  .then(() => {
    onSetLocalSuccess(pc1);
    console.debug(pc1.localDescription)
  })
  .catch((error) => onSetSessionDescriptionError);

  trace('pc2 setRemoteDescription start');
  pc2.setRemoteDescription(desc)
  .then(() => onSetRemoteSuccess(pc2))
  .catch((error) => onSetSessionDescriptionError(error));

  trace('pc2 createAnswer start');
  // Since the 'remote' side has no media stream we need
  // to pass in the right constraints in order for it to
  // accept the incoming offer of audio and video.
  pc2.createAnswer(onCreateAnswerSuccess, onCreateSessionDescriptionError);
}


function onCreateSessionDescriptionError(error) {
  trace('Failed to create session description: ' + error.toString());
}

function onSetLocalSuccess(pc) {
  trace(getName(pc) + ' setLocalDescription complete');
}

function onSetRemoteSuccess(pc) {
  trace(getName(pc) + ' setRemoteDescription complete');
}

function onSetSessionDescriptionError(error) {
  trace('Failed to set session description: ' + error.toString());
}

function gotRemoteStream(e) {
  remoteVideo.srcObject = e.stream;
  trace('pc2 received remote stream');
}


function onCreateAnswerSuccess(desc) {
  trace('Answer from pc2:\n' + desc.sdp);

  trace('pc2 setLocalDescription start');
  pc2.setLocalDescription(desc)
  .then(() => onSetLocalSuccess(pc2))
  .catch((err) => onSetSessionDescriptionError(err));

  trace('pc1 setRemoteDescription start');
  pc1.setRemoteDescription(desc)
  .then(() => onSetRemoteSuccess(pc1))
  .catch((err) => onSetSessionDescriptionError(err));
}


function onIceCandidate(pc, event) {
  if (event.candidate) {
    getOtherPc(pc).addIceCandidate(new RTCIceCandidate(event.candidate),
        function() {
          onAddIceCandidateSuccess(pc);
        },
        function(err) {
          onAddIceCandidateError(pc, err);
        }
    );
    trace(getName(pc) + ' ICE candidate: \n' + event.candidate.candidate);
  }
}

function onAddIceCandidateSuccess(pc) {
  trace(getName(pc) + ' addIceCandidate success');
}

function onAddIceCandidateError(pc, error) {
  trace(getName(pc) + ' failed to add ICE Candidate: ' + error.toString());
}

function onIceStateChange(pc, event) {
  if (pc) {
    trace(getName(pc) + ' ICE state: ' + pc.iceConnectionState);
    console.log('ICE state change event: ', event);
  }
}

function getName(pc) {
  return (pc === pc1) ? 'pc1' : 'pc2'
}

function getOtherPc(pc) {
  return (pc === pc1) ? pc2 : pc1
}

function hangup() {
  trace('Ending call');
  pc1.close();
  pc2.close();
  pc1 = null;
  pc2 = null;
  this.setState({hangupButtonDisabled:true})
  this.setState({callButtonDisabled:false})
  remoteVideo.srcObject = null;
}

function stop() {
  trace('Stopping everything')
  localVideo.srcObject = null;
  remoteVideo.srcObject = null;
  this.setState({startButtonDisabled:false})
  this.setState({callButtonDisabled:true})
  this.setState({hangupButtonDisabled:true})
  this.setState({stopButtonDisabled:true})
  if (localStream.stop) {
    localStream.stop() // idk what this does, left here for legacy reasons..?
  } else {
    localStream.getTracks().forEach(function(track) { track.stop() })
  }
}

export default React.createClass({
  getInitialState() {
    return {
      startButtonDisabled:  false,
      callButtonDisabled:   true,
      hangupButtonDisabled: true,
      stopButtonDisabled:   true,
    };
  },
  componentDidMount() {
    startButton  = this.refs.startButton;
    callButton   = this.refs.callButton;
    hangupButton = this.refs.hangupButton;
    stopButton   = this.refs.stopButton;
    localVideo   = this.refs.localVideo;
    remoteVideo  = this.refs.remoteVideo;
    // localVideo.srcObject = 'https://www.youtube.com/watch?v=u1-MFo7_n-Y';
    localVideo.addEventListener('loadedmetadata', () => {
      trace('Local video videoWidth: ' + localVideo.videoWidth +
        'px, videoHeight: ' + localVideo.videoHeight + 'px')
    });
    remoteVideo.addEventListener('loadedmetadata', () => {
      trace('Remote video videoWidth: ' + remoteVideo.videoWidth +
        'px,  videoHeight: ' + remoteVideo.videoHeight + 'px')
    });
    remoteVideo.onresize = () => {
      trace('Remote video size changed to ' +
        remoteVideo.videoWidth + 'x' + 
        remoteVideo.videoHeight)
      // We'll use the first onsize callback as an 
      // indication that video has started playing out.
      if (startTime) {
        var elapsedTime = window.performance.now() - startTime
        trace('Setup time: '+ elapsedTime.toFixed(3) +'ms')
        startTime = null
      }
    };
  },
  render() {
    return (
      <Card> 
        <CardActions>
          <RaisedButton label="Start" 
            ref="startButton"
            onMouseDown={start.bind(this)}
            primary={true} 
            disabled={this.state.startButtonDisabled}
          />
          <RaisedButton label="Call" 
            ref="callButton"
            onMouseDown={call.bind(this)}
            primary={true} 
            disabled={this.state.callButtonDisabled}
          />
          <RaisedButton label="Hang Up" 
            ref="hangupButton"
            onMouseDown={hangup.bind(this)}
            secondary={true} 
            disabled={this.state.hangupButtonDisabled}
          />
          <RaisedButton label="Stop" 
            ref="stopButton"
            onMouseDown={stop.bind(this)}
            secondary={true} 
            disabled={this.state.stopButtonDisabled}
          />
        </CardActions>
        <CardMedia>
          <div className="flex-container">
            <video ref="localVideo" autoPlay
              style={styles.video}
            />
            <video ref="remoteVideo" autoPlay
              style={styles.video}
            />
          </div>
        </CardMedia>
      </Card>
    )
  }
});

styles = {
  video : {
    width:'calc(50% - 12px)',
    height:'auto',
    // border:'1px dashed red',
    boxSizing:'border-box',
    margin:'0 0 20px 0',
    verticalAlign:'top',
    background:Colors.black,
  }
};