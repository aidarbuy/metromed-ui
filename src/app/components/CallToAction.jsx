import React from 'react';
import Paper from 'material-ui/lib/paper';
import CallToActionButton from '../components/CallToActionButton'

const style = {
  paper: {
    background: '#E91E63',
    // background: '#FF4081',
    // background: '#9C27B0',
    // minHeight: 200,
    // lineHeight: 200,
    // width: '100%',
    // textAlign: 'center',
  },
  content: {
    color: 'white',
    lineHeight: 1.4,
    // verticalAlign: 'middle',
    // display: 'inline-block',
    padding: 10,
  }
};

module.exports = () => (
  <div style={{padding:10}}>
    <Paper style={style.paper} zDepth={2}>
      <div id="call-to-action-content" style={style.content}>
        <h1>If You Feel Sick You Should Not Wait</h1>
        <CallToActionButton />
        <h2>We are passionate about caring for your health and providing exceptional urgent care</h2>
      </div>
    </Paper>
  </div>
);