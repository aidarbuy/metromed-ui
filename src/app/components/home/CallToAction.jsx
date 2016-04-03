import React from 'react';
import Paper from 'material-ui/lib/paper';
import CallToActionButton from '../home/CallToActionButton'
import {pink500} from 'material-ui/lib/styles/colors'

const styles = {
  paper: {
    background: pink500,
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
    <Paper style={styles.paper} zDepth={2}>
      <div id="call-to-action-content" style={styles.content}>
        <h1>
          If You Feel Sick You Should Not Wait!
        </h1>
        <CallToActionButton />
        <h2>
          We are passionate about caring for your health 
          and providing exceptional urgent care!
        </h2>
      </div>
    </Paper>
  </div>
);