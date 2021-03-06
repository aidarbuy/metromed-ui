import React from 
  'react';
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
import FlatButton from 
  'material-ui/lib/flat-button';
import CardText from 
  'material-ui/lib/card/card-text';
import Avatar from 
  'material-ui/lib/avatar';
import * as Colors from 
  'material-ui/lib/styles/Colors';

export default () => (
  <Card style={{maxWidth:200}}>
    <CardHeader
      title="MetroMed"
      subtitle="Urgent Care"
      avatar={
        <Avatar src="icons/logo.svg" 
          color={Colors.cyan500}
          backgroundColor={Colors.cyan500}
          style={{boxShadow:'1px 1px #0097A7'}}
        />
      }
    />
    <CardMedia
      overlayContentStyle={{
        // backgroundColor:'red',
        bottom: -1,
      }} 
      overlay={<CardTitle 
        title="(703)-687-4158" 
        subtitle='info@metromeduc.com' 
      />}>
      <img src="images/gallery/three-medics-thumb.jpg" />
    </CardMedia>
  </Card>
);