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
import RaisedButton from 
  'material-ui/lib/raised-button'
import CardText from 
  'material-ui/lib/card/card-text'
import LibraryBooks from 
  'material-ui/lib/svg-icons/av/library-books'
import FontIcon from 
  'material-ui/lib/font-icon'

const styles = {
  button: {
    margin: 12,
  }
}

export default React.createClass({
  // ask for 'props' from context
  contextTypes: {
    props: React.PropTypes.object
  },

  render() {
    const { props } = this
    const imgSrc = 
      'images/articles/' + 
      props.img + 
      '-600x300.jpg'
    const html = {__html:props.teaser}
    return (

      <Card style={{
      	minHeight:400,
      	// width:'98%',
        margin:4,
        // background:'red'
      }}>
      	{/*
        <CardHeader
          titl="URL Avatar"
          subtitl="Subtitle"
          avatar=avatarSrc
        />
      	*/}
        <CardMedia
          overlay={
            <CardTitle title={props.title
          } 
          subtitle={props.subtitle} />}
         >
          <img src={imgSrc} />
        </CardMedia>
        {/*
        <CardTitle 
          title="Card title" 
          subtitle="Card subtitle" 
        />
      	*/}
        <CardText 
        	dangerouslySetInnerHTML={html} 
        	style={{
        		fontSize:18,
        		textAlign:'left',
        	}} 
        />
        <CardActions style={{
          textAlign:'right',
          // background:'green'
        }}>
          <RaisedButton 
            label="Read more" 
            labelPosition="before"
            secondary={true}
            icon={<LibraryBooks />}
            style={styles.button}
            linkButton={true}
            href={"/articles/" + props.img}
          />
        </CardActions>
      </Card>
    )
  }
})
// icon={<FontIcon className="muidocs-icon-custom-github"/>}