import React from 'react';
import Paper from 'material-ui/lib/paper';
import CallToActionButton from '../home/CallToActionButton'
import {pink500} from 'material-ui/lib/styles/colors'

const styles = {
  paper: {
    marginTop:10,
    height:200,
    background:pink500,
  },
  content: {
    color:'white',
    lineHeight:1.4,
    // verticalAlign: 'middle',
    // display: 'inline-block',
    padding:10,
  }
};

module.exports = () => (
  <Paper style={styles.paper} zDepth={2}>
    <div style={styles.content}>
      <h1 style={{marginBottom:10}}>
        If You Feel Sick You Should Not Wait!
      </h1>
      <CallToActionButton />
      <h2 style={{marginTop:10}}>
        We are passionate about caring for your health 
        and providing exceptional urgent care!
      </h2>
    </div>
  </Paper>
);