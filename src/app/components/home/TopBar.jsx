import React 
  from 'react';
import Card 
  from 'material-ui/lib/card/card';
import CardActions 
  from 'material-ui/lib/card/card-actions';
import CardHeader 
  from 'material-ui/lib/card/card-header';
import CardMedia 
  from 'material-ui/lib/card/card-media';
import CardTitle 
  from 'material-ui/lib/card/card-title';
import FlatButton 
  from 'material-ui/lib/flat-button';
import CardText 
  from 'material-ui/lib/card/card-text';
import Divider 
  from 'material-ui/lib/divider';
import HoursOfOperation 
  from '../home/HoursOfOperation'
import { white } 
  from 'material-ui/lib/styles/colors'

const style = {
  cellA: {
    background: '#56cce1',
  },
  cellB: {
    background: '#2cbfd9',
  },
  cellC: {
    background: '#2ca6d9',
  },
  cellD: {
    background: '#1b90da',
  },
  title: {
    fontWeight: 400,
    paddingBottom: 0,
    color: white,
  },
  link: {
    color: white,
    textDecoration: 'none',
  },
}

module.exports = () => (
  <div>
    <div className="flex-container">
      <div className="flex-item">
        <Card 
          className="cell" 
          style={style.cellA}
        >
          <CardTitle 
            title="Contact Info" 
            titleColor="white" 
            style={style.title} 
          />
          <CardText className="top-bar-card-text">
            <p>
              <a href="tel:7036874158" style={style.link}>
                (703) 687-4158
              </a>
            </p>
            <p>
              <a href="/location" style={style.link}>
                952 Edwards Ferry Rd NE
              </a>
              <br/>
              <a href="/location" style={style.link}>
                Leesburg, VA 20176
              </a>
            </p>
            <p>
              <a href="mailto:info@metromeduc.com" 
                style={style.link}>info@metromeduc.com</a>
            </p>
          </CardText>
        </Card>
      </div>

      <div className="flex-item">
        <Card 
          className="cell" 
          style={style.cellB}
        >
          <CardTitle 
            title="Hours of Operation" 
            titleColor="white" 
            style={style.title} 
          />
          <CardText className="top-bar-card-text">
            <HoursOfOperation />
          </CardText>
        </Card>
      </div>

      <div className="flex-item">
        <Card 
          className="cell" 
          style={style.cellC}
        >
          <CardTitle 
            title="Urgent Care" 
            titleColor="white" 
            style={style.title} 
          />
          <CardText className="top-bar-card-text">
            <p>
              Our Emergency Medicine 
              doctors can diagnose 
              and treat a wide variety 
              of illnessess and injuries.
            </p>
          </CardText>
        </Card>
      </div>

      <div className="flex-item">
        <Card 
          className="cell" 
          style={style.cellD}
        >
          <CardTitle 
            title="Holidays" 
            titleColor="white" 
            style={style.title} 
            titleStyle={{
              // background:'yellow',
            }} 
          />
          <CardText className="top-bar-card-text">
            <p>
              Major Holidays Observed
            </p>
            <Divider />
            <p>
              No Appointments Necessary
            </p>
          </CardText>
        </Card>
      </div>
    </div>
  </div>
);