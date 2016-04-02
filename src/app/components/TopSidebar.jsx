import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Divider from 'material-ui/lib/divider';
import HouseOfOperation from '../components/HouseOfOperation'

const style = {
  cellA: {
    background: '#56cce1',
    // background: 'green',
  },
  cellB: {
    background: '#2cbfd9',
    // background: 'green',
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
    color: 'white',
    // background: 'blue',
  },
  text: {
    fontSize: 19,
    fontWeight: 300,
    lineHeight: 1.4,
    verticalAlign: 'middle',
    display: 'inline-block',
    color: 'white',
    // background: 'red',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

const TopSidebar = () => (
  <div>
    <div className="flex-container">
      <div className="flex-item">
        <Card className="cell" style={style.cellA}>
          <CardTitle 
            title="Contact Info" 
            titleColor="white" 
            style={style.title} 
          />
          <CardText style={style.text}>
            <p>
              <a href="tel:7036874158" style={style.link}>
                (703) 687-4158
              </a>
            </p>
            <p>
              <a href="#/map" style={style.link}>
                952 Edwards Ferry Rd NE
              </a>
              <br/>
              <a href="#/map" style={style.link}>
                Leesburg, VA 20176
              </a>
            </p>
            <p>
              <a href="mailto:info@me<tr>omeduc.com" 
                style={style.link}>
                info@metromeduc.com
              </a>
            </p>
          </CardText>
        </Card>
      </div>

      <div className="flex-item">
        <Card className="cell" style={style.cellB}>
          <CardTitle 
            title="Hours of Operation" 
            titleColor="white" 
            style={style.title} 
          />
          <CardText style={style.text}>
            <HouseOfOperation />
          </CardText>
        </Card>
      </div>

      <div className="flex-item">
        <Card className="cell" style={style.cellC}>
          <CardTitle 
            title="Urgent Care" 
            titleColor="white" 
            style={style.title} 
          />
          <CardText style={style.text}>
            <p>
              Our Emergency Medicine doctors can 
              diagnose and treat a wide variety of 
              illnessess and injuries.
            </p>
          </CardText>
        </Card>
      </div>

      <div className="flex-item">
        <Card className="cell" style={style.cellD}>
          <CardTitle 
            title="Holidays" 
            titleColor="white" 
            style={style.title} 
            titleStyle={{
              // background:'yellow',
            }} 
          />
          <CardText style={style.text}>
            <p>Major Holidays Observed</p>
            <Divider />
            <p>No Appointments Necessary</p>
          </CardText>
        </Card>
      </div>
    </div>
  </div>
);

export default TopSidebar