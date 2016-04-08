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
import { cyan700 } from 
  'material-ui/lib/styles/colors'

import services from 
  '../data/services'

module.exports = () => (
  <div>
    <h1>Services</h1>

    <div className="flex-container">
      {services.map((item, i) => (
        <div key={i} className="flex-item">
          <Card style={{
            margin:10,
            boxSizing:'border-box',
          }}>
            {/*
            <CardHeader
              title={item.title}
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://lorempixel.com/600/337/nature/" />
            </CardMedia>
            */}
            <CardTitle 
              title={item.title} 
            />
            <h2 style={{
              margin:0,
              // background:'red',
              padding:0,
              lineHeight:1,
              fontSize:125,
              color:cyan700,
            }}>{item.price}</h2>
            <CardText>
              <ul style={{
                padding:0,
                listStyleType:'none',
              }}>
                {item.list.map((li, i) => (
                  <ListItem key={i}
                    primaryText={li} 
                  />
                ))}
              </ul>
            </CardText>
            {/*
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            */}
          </Card>
        </div>
      ))}
    </div>
  </div>
)