import React from 
  'react';
import Paper from 
  'material-ui/lib/paper';
import {pink500} from 
  'material-ui/lib/styles/colors'
import CallToActionButton from 
  '../home/CallToActionButton'

const styles = {
  paper: {
    marginTop:10,
    minHeight:200,
    background:pink500,
  },
  content: {
    color:'white',
    lineHeight:1.4,
    // verticalAlign: 'middle',
    // display: 'inline-block',
    padding:20,
  }
};

module.exports = () => (
  <Paper style={styles.paper} zDepth={2}>
    <div style={styles.content}>
      <h4 style={{
        marginBottom:10,
        color:'white'
      }}>
        If You Feel Sick You Should Not Wait!
      </h4>

      <CallToActionButton />

      <h5 style={{
        marginTop:10,
        color:'white'
      }}>
        We are passionate about caring 
        for your health and providing 
        exceptional urgent care
      </h5>
    </div>
  </Paper>
);