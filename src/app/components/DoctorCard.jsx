import React from 'react';
import { Link }  from 'react-router';

import Card        from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader  from 'material-ui/lib/card/card-header';
import CardMedia   from 'material-ui/lib/card/card-media';
import CardTitle   from 'material-ui/lib/card/card-title';
import FlatButton  from 'material-ui/lib/flat-button';
import CardText    from 'material-ui/lib/card/card-text';
import Button      from 'material-ui/lib/raised-button';
import Icon        from 'material-ui/lib/svg-icons/navigation/arrow-forward';

export default React.createClass({
  contextTypes: {
    store:  React.PropTypes.object,
    router: React.PropTypes.object,
  },
  render() {
    const { doc } = this.props;
    const fullName = doc.firstname + " " + doc.lastname;
    const route = "/doctors/" + doc.id;

    return (
      <Card style={{margin:5, boxSizing:'border-box', minHeight:490}}>
        <CardMedia 
          overlay={<CardTitle title={"Dr. " + fullName}/>}
          overlayContentStyle={{
            background:'rgba(0, 188, 212, 0.7)', bottom:0, margin:0, padding:0}}
          style={{background:'red'}}
        >
          <img src={'images/doctors/' + doc.img.big} 
            style={{background:'red',padding:0,margin:0,}}/>
        </CardMedia>

        <CardTitle title={doc.speciality} subtitle={doc.title} />

        <CardText className="doctors-card-text">{doc.description[0]}</CardText>

        <CardActions style={{textAlign:'right'}}>
          <Button label="Read more" icon={<Icon/>} 
            linkButton={true}
            tooltip={"Read about doctor " + fullName}
            labelPosition="before" 
            secondary={true} 
            onTouchTap={() => {
              this.context.store.dispatch({type:"UPDATE_ROUTE", route})
            }}
            containerElement={<Link to={route} />}
          />
        </CardActions>
      </Card>
    );
  }
});