import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
const subtitle = 'info@metromeduc.com'

const CardWithAvatar = () => (
  <Card>
    <CardHeader
      title="MetroMed"
      subtitle="Urgent Care"
      avatar="images/protractor.png"
    />
    <CardMedia
      overlay={<CardTitle title="(703)-687-4158" subtitle={subtitle} />}
    >
      <img src="images/gallery/three-medics-thumb.jpg" />
    </CardMedia>
  </Card>
);

export default CardWithAvatar;