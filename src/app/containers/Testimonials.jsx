import React 
  from 'react';
import List 
  from 'material-ui/lib/lists/list';
import ListItem 
  from 'material-ui/lib/lists/list-item';
import Subheader 
  from 'material-ui/lib/Subheader';
import Divider 
  from 'material-ui/lib/divider';
import Avatar 
  from 'material-ui/lib/avatar';
import IconButton 
  from 'material-ui/lib/icon-button';
import MoreVertIcon 
  from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu 
  from 'material-ui/lib/menus/icon-menu';
import MenuItem 
  from 'material-ui/lib/menus/menu-item';
import testimonials 
  from '../data/testimonials';
import { 
  cyan500, grey400, darkBlack, lightBlack
} from 'material-ui/lib/styles/colors';

const path = "images/testimonials/";

const ListExampleMessages = () => (
  <List className="list">
    {testimonials.map((item, index) => (
      <div key={index}>
        <ListItem className="list-item"
          leftAvatar={
            <Avatar
              src={path + item.img}
              size={70}
            />
          }
          primaryText={
            <p className="primary-text" 
              style={{
                fontSize:18,
                lineHeight:1.4,
                textAlign:'left',
                marginLeft:40,
              }}>
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
        <Divider inset={true} />
      </div>
    ))}
  </List>
);

export default ListExampleMessages;