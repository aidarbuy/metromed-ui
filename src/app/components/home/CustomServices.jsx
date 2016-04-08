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
import RaisedButton from 
  'material-ui/lib/raised-button'
import CardText from 
  'material-ui/lib/card/card-text'
import HoursOfOperation from 
  '../home/HoursOfOperation'
import IconHeart from 
  '../icons/IconHeart'
import IconAidKit from 
  '../icons/IconAidKit'
import IconImages from 
  '../icons/IconImages'
import IconHistory from 
  '../icons/IconHistory'
import { 
  cyan500,
  pink500,
} from 
  'material-ui/lib/styles/colors'

const styles = {
  card: {
    margin:4,
    padding:20,
    minHeight:350,
  },
  media: {},
  icon: {
    color:cyan500,
    hover:pink500,
    display:'inline-block',
    width:70,
    height:70,
  },
  title: {
    margin:0,
    padding:0,
  },
  text: {
    fontSize:17,
    fontWeight:300,
    lineHeight:1.4,
    margin:0,
    padding:0,
  },
  p: {
    marginTop:0,
    padding:0,
  },
}

module.exports = () => (
  <div 
    className="flex-container" 
    style={{marginTop:20}}
  >
    <div className="flex-item">
      <Card style={styles.card}>
        <CardMedia style={styles.media}>
          <IconHeart styles={styles.icon} />
        </CardMedia>
        <CardTitle title="Cardio Health" 
          titleStyle={styles.title} 
        />
        <CardText style={styles.text}>
          <p style={styles.p}>
            Our clinic is equipped with{' '}
            <strong>EKG</strong>,{' '}
            <strong>X-ray</strong> and{' '}
            <strong>Laboratory</strong>.
          </p>
        </CardText>
        <CardActions>
          <RaisedButton 
            label="About our clinic" 
            linkButton={true}
            href="/about"
          />
        </CardActions>
      </Card>
    </div>

    <div className="flex-item">
      <Card style={styles.card}>
        <CardMedia style={styles.media}>
          <IconAidKit styles={styles.icon} />
        </CardMedia>
        <CardTitle title="Medical Treatment" 
          titleStyle={styles.title} 
        />
        <CardText style={styles.text}>
          <p style={styles.p}>
            We administer <strong>breathing{' '}
            treatments</strong>, repair{' '}
            <strong>lacerations</strong>,{' '}
            dispense <strong>medications{' '}
            </strong> intravenously,{' '}
            remove <strong>foreign{' '}
            objects</strong> from the{' '}
            eyes, and more.
          </p>
        </CardText>
        <CardActions>
          <RaisedButton 
            label="Check our services"
            linkButton={true}
            href="/services"
          />
        </CardActions>
      </Card>
    </div>

    <div className="flex-item">
      <Card style={styles.card}>
        <CardMedia style={styles.media}>
          <IconImages styles={styles.icon} />
        </CardMedia>
        <CardTitle 
          title="Photo Gallery" 
          titleStyle={styles.title} 
        />
        <CardText style={styles.text}>
          <p style={styles.p}>
            Check out our pictures!
          </p>
        </CardText>
        <CardActions>
          <RaisedButton 
            label="View photo gallery" 
          />
        </CardActions>
      </Card>
    </div>

    <div className="flex-item">
      <Card style={styles.card}>
        <CardMedia style={styles.media}>
          <IconHistory styles={styles.icon} />
        </CardMedia>
        <CardTitle 
          title="Anti-aging Institute" 
          titleStyle={styles.title} 
        />
        <CardText style={styles.text}>
          <p style={styles.p}>
            We organize regular meetings{' '}
            with clients who want to be{' '}
            healthy, youthful and energetic.
          </p>
        </CardText>
        <CardActions>
          <RaisedButton 
            label="Visit cognitivemuse.com" 
            linkButton={true}
            href="http://www.cognitivemuse.com"
          />
        </CardActions>
      </Card>
    </div>
  </div>
);