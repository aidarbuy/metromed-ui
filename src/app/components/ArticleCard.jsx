import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const CardExampleWithAvatar = (props) => (
  <Card style={{
  	minHeight:360,
  	width:'98%',
  }}>
  	{/*
    <CardHeader
      titl="URL Avatar"
      subtitl="Subtitle"
      avata="http://lorempixel.com/100/100/nature/"
    />
  	*/}
    <CardMedia
      overlay={<CardTitle title={props.title} 
      subtitle={props.subtitle} />}
     >
      <img src={'images/articles/' + props.img + '-600x300.jpg'} />
    </CardMedia>
    {/*
    <CardTitle title="Card title" subtitle="Card subtitle" />
  	*/}
    <CardText 
    	dangerouslySetInnerHTML={{__html:props.teaser}} 
    	style={{
    		fontSize:18,
    		textAlign:'left',
    	}} 
    />
    <CardActions>
      <FlatButton label="Read more" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;