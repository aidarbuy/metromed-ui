import * as Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';

export default () => (
  <Paper zDepth={2} style={{
    margin:'20px 0',
    padding:20,
    minHeight:200,
    background:Colors.pink500,
    textAlign:'center',
  }}>

    <h4 style={{
      margin:0,
      // background:'green', 
      color:'white',
    }}>If You Feel Sick You Should Not Wait!</h4>

    <RaisedButton label="Call Us Now"
      href="tel:1-703-687-4158" 
      primary={false} 
      secondary={true}
      linkButton={true}
      style={{margin:'20px 0'}}
    />

    <h5 style={{color:'white'}}>We are passionate about caring for your health and providing exceptional urgent care</h5>
  </Paper>
);