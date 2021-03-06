import React       from 'react';
import Card        from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader  from 'material-ui/lib/card/card-header';
import CardMedia   from 'material-ui/lib/card/card-media';
import CardTitle   from 'material-ui/lib/card/card-title';
import FlatButton  from 'material-ui/lib/flat-button';
import CardText    from 'material-ui/lib/card/card-text';
import Divider     from 'material-ui/lib/divider';
import Hours       from '../home/HoursOfOperation'
import * as Colors from 'material-ui/lib/styles/colors'

const styles = {
  CardTitle: {
    fontWeight: 400,
    paddingBottom: 0,
    color: Colors.white,
  },
  link: {
    color: Colors.white,
    textDecoration: 'none',
  },
};

export default () => (
  <div className="flex-container">
    <div className="flex-item">
      <Card className="cell" style={{background:Colors.cyan400}}>
        <CardTitle title="Contact Info" titleColor="white" style={styles.CardTitle}/>
        <CardText className="top-bar-card-text">
          <p><a href="tel:7036874158" style={styles.link}>(703) 687-4158</a></p>
          <p><a href="/location" style={styles.link}>952 Edwards Ferry Rd NE</a><br/><a href="/location" style={styles.link}>Leesburg, VA 20176</a></p>
          <p><a href="mailto:info@metromeduc.com" style={styles.link}>info@metromeduc.com</a></p>
        </CardText>
      </Card>
    </div>
    <div className="flex-item">
      <Card className="cell" style={{background:Colors.cyan500}}>
        <CardTitle title="Hours of Operation" titleColor="white" style={styles.CardTitle}/>
        <CardText className="top-bar-card-text">
          <Hours />
        </CardText>
      </Card>
    </div>
    <div className="flex-item">
      <Card className="cell" style={{background:Colors.cyan500}}>
        <CardTitle title="Urgent Care" titleColor="white" style={styles.CardTitle} />
        <CardText className="top-bar-card-text">
          <p>Our Emergency Medicine doctors can diagnose and treat a wide variety of illnessess and injuries.</p>
        </CardText>
      </Card>
    </div>
    <div className="flex-item">
      <Card className="cell" style={{background:Colors.cyan400}}>
        <CardTitle title="Holidays" titleColor="white" style={styles.CardTitle}/>
        <CardText className="top-bar-card-text">
          <p>Major Holidays Observed</p>
          <Divider />
          <p>We are closed Monday May 30th</p>
        </CardText>
      </Card>
    </div>
  </div>
);
          // <p>No Appointments Necessary</p>