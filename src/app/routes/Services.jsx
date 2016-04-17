// src/app/routes/Services.jsx

import React from 'react';
import Helmet from 'react-helmet';

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
import ContentInbox from 
  'material-ui/lib/svg-icons/content/inbox';
import * as Colors from 
  'material-ui/lib/styles/colors';

import ListItemDivider from 
  '../components/ui/ListItemDivider';
import services from '../data/services'

const styles = {
  card : {
    margin:10,
    boxSizing:'border-box',
  },
  cardTitle : {
    fontSize:35,
  },
  price : {
    margin:0,
    padding:0,
    lineHeight:1,
    // fontSize:125,
    color:Colors.cyan700,
  },
  ul : {
    padding:0,
    listStyleType:'none',
  },
};

module.exports = () => (
  <div>
    <Helmet title="Services - Metromed UC"/>

    <h3>Services</h3>

    <div className="flex-container">
      {services.map((item, i) => (
        <div key={i} className="flex-item">
          <Card style={styles.card}>

            <CardTitle title={item.title} 
              titleStyle={styles.cardTitle}
              titleColor={Colors.cyan700} 
            />

            <h1 style={styles.price}>${item.price}</h1>

            <CardText>
              <ul style={styles.ul}>
                {item.list.map((li, i, arr) => (
                  <div key={i}>
                    <ListItem primaryText={li} />
                    <ListItemDivider index={i} length={arr.length}
                      style={{marginLeft:20, marginRight:20}}
                    />
                  </div>
                ))}
              </ul>
            </CardText>

          </Card>
        </div>
      ))}
    </div>
  </div>
)