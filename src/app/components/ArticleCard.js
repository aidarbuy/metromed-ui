import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import ReadMoreIcon  from 'material-ui/lib/svg-icons/action/description';
import React from 'react';

export default React.createClass({
  render() {
    const { props } = this;
    const img = props.img;
    const src = "images/articles/" + img + "-600x300.jpg";

    return (
      <Card style={{minHeight:400}}>
        <CardMedia
          overlay={<CardTitle title={props.title} 
          subtitle={props.subtitle} />}
         >
          <img src={src} />
        </CardMedia>
        <CardText className="article-card-text"
        	dangerouslySetInnerHTML={{__html:props.teaser}}
        />
        <CardActions style={{
          textAlign:'right',
          // background:'green'
        }}>
          <RaisedButton 
            label="Read more" 
            labelPosition="before"
            primary={false}
            secondary={true}
            icon={<ReadMoreIcon />}
            style={{margin:12}}
            linkButton={true}
            href={"/articles/" + props.img}
          />
        </CardActions>
      </Card>
    )
  }
})