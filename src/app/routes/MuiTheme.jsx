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
import List from 
  'material-ui/lib/lists/list';
import ListItem from 
  'material-ui/lib/lists/list-item';

import ListItemDivider from 
  '../components/ui/ListItemDivider';

export default React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getKeys(muiTheme) {
    var keys = Object.keys(muiTheme).map((key, i, mui) => {
      var currentObject = muiTheme[key];
      if (key === "leftNav") console.log(currentObject);
      if (typeof currentObject === "object") {
        var props = this.getPropsFrom(currentObject);
        return (
          <div className="flex-item" key={key}>
            <Card style={{margin:10,minHeight:250}}>
              <CardTitle title={key}/>
              <CardText style={{textAlign:'left'}}>
                <List>
                  {props}
                </List>
              </CardText>
            </Card>
          </div>
        )
      }
    });
    return keys;
  },
  
  getPropsFrom(object) {
    var props = Object.keys(object).map((propName, i) => {
      return (
        <div key={propName}>
          <ListItem>
            {propName + ": " + object[propName]}
          </ListItem>
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