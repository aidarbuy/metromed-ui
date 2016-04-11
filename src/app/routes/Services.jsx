// Services.jsx
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
import List from 
  'material-ui/lib/lists/list'
import ListItem from 
  'material-ui/lib/lists/list-item'
import ContentInbox from 
  'material-ui/lib/svg-icons/content/inbox'
import * as Colors from 
  'material-ui/lib/styles/colors'
import ListItemDivider from 
  '../components/ui/ListItemDivider';

import services from 
  '../data/services'

module.exports = () => (
  <div>

    <h2>Services</h2>

    <div className="flex-container">
      {services.map((item, i) => (
        <div key={i} className="flex-item">
          <Card style={{
            margin:10,
            boxSizing:'border-box',
          }}>
            <CardTitle 
              title={item.title} 
              titleStyle={{
                fontSize:35,
              }}
              titleColor={Colors.cyan700}
            />
            <h1 style={{
              margin:0,
              padding:0,
              lineHeight:1,
              // fontSize:125,
              color:Colors.cyan700,
            }}>${item.price}</h1>
            <CardText>
              <ul style={{
                padding:0,
                listStyleType:'none',
              }}>
                {item.list.map((li, i, arr) => (
                  <div key={i}>
                    <ListItem
                      primaryText={
                        <span style={{
                          // background:'green'
                        }}>{li}</span>
                      } 
                      style={{
                        // border:'1px solid red'
                      }}
                    ></ListItem>
                    <ListItemDivider 
                      index={i}
                      length={arr.length}
                      style={{
                        marginLeft: 20,
                        marginRight:20,
                      }}
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