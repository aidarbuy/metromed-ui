import React from 
  'react'
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

import Conditions from 
  './Conditions'

module.exports = () => (
  <Card>
    <CardTitle 
      title="Welcome to MetroMed!" 
      subtitle="Urgent Care of Leesburg" 
    />
    <CardMedia overlay={
      <CardTitle 
        title="Matt, Doreen and Karl" 
        subtitle="members of our team" 
      />
    }>
      <img src="images/team/three-medics.jpg" />
    </CardMedia>
    <CardText style={{textAlign:'left'}}>
      <h2>
        At MetroMed Urgent Care we treat 
        patients of all ages, with a 
        variety of conditions:
      </h2>
      <Conditions/>
      <div style={{marginTop:20}}>
        <em >
          * If you feel that you need to be 
          admitted to the hospital then it is 
          time to go to emergency room.
        </em>
      </div>
    </CardText>
  </Card>
);