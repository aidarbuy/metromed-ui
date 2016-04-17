// src/app/components/home/Testimonials.jsx
import React from 'react';

import List from 
  'material-ui/lib/lists/list';
import ListItem from 
  'material-ui/lib/lists/list-item';
import Divider from 
  'material-ui/lib/divider';
import Avatar from 
  'material-ui/lib/avatar';
import IconButton from 
  'material-ui/lib/icon-button';
import MoreVertIcon from 
  'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 
  'material-ui/lib/menus/icon-menu';
import MenuItem from 
  'material-ui/lib/menus/menu-item';
import Toolbar from 
  'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 
  'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 
  'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 
  'material-ui/lib/toolbar/toolbar-title';
import Paper from 
  'material-ui/lib/paper';
import * as Colors from 
  'material-ui/lib/styles/colors';

import testimonials from 
  '../../data/testimonials'
import ListItemDivider from 
  '../ui/ListItemDivider';

const path = "images/testimonials/";

module.exports = () => (
  <Paper>
    <Toolbar>
      <ToolbarGroup 
        style={{
          marginLeft:'auto',
          marginRight:'auto',
        }}
      >
        <ToolbarTitle text="Testimonials" />
      </ToolbarGroup>
    </Toolbar>

    <List className="list">
      {testimonials.map((item, index, arr) => (
        <div key={index}>
          <ListItem className="list-item"

            leftAvatar={
              <Avatar
                src={path + item.img}
                size={70}
              />
            }

            primaryText={
              <p className="testimonials-primary-text">
                  {item.text}
              </p>
            }

            secondaryText={
              <div className="secondary-text"
                style={{
                textAlign:'left',
                marginLeft:40,
              }}>
                <strong>{item.name}</strong>
                ,&nbsp;
                <span>{item.city}</span>
              </div>
            }
            secondaryTextLines={2}

            style={{border:'0px solid grey'}}
          />
          <ListItemDivider 
            index={index} 
            length={arr.length}
          />
        </div>
      ))}
    </List>
  </Paper>
);