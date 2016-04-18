// src/app/routes/MuiTheme.jsx
import React from 'react';

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
import ListItem from 
  'material-ui/lib/lists/list-item';

import ListItemDivider from 
  '../components/ui/ListItemDivider';

export default React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getKeys(muiTheme) {
    const keys = Object.keys(muiTheme).map((key, i) => {
      const currObj = muiTheme[key];
      console.log(currObj);
      // const props = this.getProps(currObj);
      return (
        <div className="flex-item" key={key}>
          <Card style={{margin:10,minHeight:250}}>
            <CardTitle title={key}/>
            <CardText style={{textAlign:'left'}}>
            </CardText>
          </Card>
        </div>
      )
    });
    return keys;
  },
  
  getProps(currObj) {
    var props = Object.keys(currObj).map((prop, i, obj) => {
      return (
        <div key={prop}>
          <ListItem>
            {prop + ": " + currObj[prop]}
          </ListItem>
          <ListItemDivider index={i} length={obj.length} />
        </div>
      );
    });
    return props;
  },  

  render() {
    const muiTheme = this.context.muiTheme;
    var keys = this.getKeys(muiTheme);
    return (
      <div className="flex-container">{keys}</div>
    );
  }
});