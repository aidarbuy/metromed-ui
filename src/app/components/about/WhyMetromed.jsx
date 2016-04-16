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
import ActionGrade from 
  'material-ui/lib/svg-icons/action/grade'
import ActionInfo from 
  'material-ui/lib/svg-icons/action/info'
import ContentInbox from 
  'material-ui/lib/svg-icons/content/inbox'
import ContentDrafts from 
  'material-ui/lib/svg-icons/content/drafts'
import ContentSend from 
  'material-ui/lib/svg-icons/content/send'
import Divider from 
  'material-ui/lib/divider'

module.exports = () => (
  <Card>
    <CardTitle title={<h3>
      Why MetroMed Urgent Care:
    </h3>}/>
    <CardMedia overlay={
      <CardTitle 
        title="Our X-Ray imaging system" 
        subtitle="We have laboratory and pharmacy as well" 
      ></CardTitle>
    }>
      <img src="images/gallery/x-ray.jpg" />
    </CardMedia>
    <CardText>
      <List>
        <ListItem className="why-metromed-list-item">
          Experienced emergency room docs and personnel
        </ListItem>
        <Divider/>
        <ListItem className="why-metromed-list-item">
          Bed-side Ultrasound Screening
        </ListItem>
        <Divider/>
        <ListItem className="why-metromed-list-item">
          X-Ray
        </ListItem>
        <Divider/>
        <ListItem className="why-metromed-list-item">
          Skillfully done procedures, such as:
          <div style={{
            maxWidth:350,
            marginLeft:'auto',
            marginRight:'auto',
          }}>
            <ul style={{
              textAlign:'left',
              lineHeight:1.4,
            }}>
              <li>Joint aspiration</li>
              <li>Ingrown toenail removal</li>
              <li>Foreign body removal from the eye</li>
              <li>Reduction of fractures and dislocations</li>
            </ul>
          </div>
        </ListItem>
        <Divider/>
        <ListItem className="why-metromed-list-item">
          Laboratory and Pharmacy
        </ListItem>
        <Divider/>
        <ListItem className="why-metromed-list-item">
          IV treatment and EKG
        </ListItem>
        <Divider/>
        <ListItem className="why-metromed-list-item">
          Location. Yes, we are right next to Wal-Mart
        </ListItem>
        <Divider/>
        <ListItem className="why-metromed-list-item">
          Clean, Quick and Pleasant
        </ListItem>
      </List>
    </CardText>
  </Card>
);