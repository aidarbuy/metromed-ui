import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import HouseOfOperation from '../components/HouseOfOperation'
import IconHeart from '../components/IconHeart'
import IconAidKit from '../components/IconAidKit'
import IconImages from '../components/IconImages'
import IconHistory from '../components/IconHistory'

const style = {
  card: {
    margin: 4,
    padding: 20,
    minHeight: 350,
  },
  media: {},
  icon: {
    color: '#E91E63',
    hover: 'green',
    display: 'inline-block',
    width: 70,
    height: 70,
  },
  title: {
    margin: 0,
    padding: 0,
  },
  text: {
    fontSize: 17,
    fontWeight: 300,
    lineHeight: 1.4,
    margin: 0,
    padding: 0,
  },
  p: {
    marginTop: 0,
    padding: 0,
  },
  button: {},
}

module.exports = () => (
  <div className="flex-container" style={{marginTop:20,  justifyContent: 'space-between'}}>
    <div className="flex-item">
      <Card style={style.card}>
        <CardMedia style={style.media}>
          <IconHeart styles={style.icon} />
        </CardMedia>
        <CardTitle title="Cardio Health" titleStyle={style.title} />
        <CardText style={style.text}>
          <p style={style.p}>Our clinic is equipped with EKG, X-ray and Laboratory.</p>
        </CardText>
        <CardActions><RaisedButton label="About our clinic" style={style.button} /></CardActions>
      </Card>
    </div>

    <div className="flex-item">
      <Card style={style.card}>
        <CardMedia style={style.media}>
          <IconAidKit styles={style.icon} />
        </CardMedia>
        <CardTitle title="Medical Treatment" titleStyle={style.title} />
        <CardText style={style.text}>
          <p style={style.p}>We administer breathing treatments, repair lacerations, dispense medications intravenously, remove foreign objects from the eyes, and more.</p>
        </CardText>
        <CardActions><RaisedButton label="Check our services" style={style.button} /></CardActions>
      </Card>
    </div>

    <div className="flex-item">
      <Card style={style.card}>
        <CardMedia style={style.media}>
          <IconImages styles={style.icon} />
        </CardMedia>
        <CardTitle title="Photo Gallery" titleStyle={style.title} />
        <CardText style={style.text}>
          <p style={style.p}>Check out our pictures!</p>
        </CardText>
        <CardActions><RaisedButton label="View photo gallery" style={style.button} /></CardActions>
      </Card>
    </div>

    <div className="flex-item">
      <Card style={style.card}>
        <CardMedia style={style.media}>
          <IconHistory styles={style.icon} />
        </CardMedia>
        <CardTitle title="Anti-aging Institute" titleStyle={style.title} />
        <CardText style={style.text}>
          <p style={style.p}>We organize regular meetings with clients who want to be healthy, youthful and energetic.</p>
        </CardText>
        <CardActions><RaisedButton label="Visit cognitivemuse.com" style={style.button} /></CardActions>
      </Card>
    </div>
  </div>
);