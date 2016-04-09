
// Doctors.jsx

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

import doctors from 
  '../data/doctors'

module.exports = () => (
  <div>

    <h2>Doctors</h2>

    <div className="flex-container">
      {doctors.map((doctor, i) => (
        <div key={doctor.id}
          className="flex-item"
        >
          <Card style={{
            margin:10,
            boxSizing:'border-box',
          }}>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"
            />

            <CardMedia 
              overlay={
                <CardTitle 
                  title={
                    "Dr. " +
                    doctor.firstname 
                    + " " + 
                    doctor.lastname
                  } 
                />
              }
              overlayContentStyle={{
                background:
                  'rgba(0, 0, 0, 0.34)',
              }}
            >
              <img src={
                'images/doctors/' + doctor.img.big
              }/>
            </CardMedia>

            <CardTitle 
              title={doctor.firstname} 
              subtitle="Card subtitle" 
            />

            <CardText style={{
              textAlign:'left',
              fontSize:16,
            }}>
              {doctor.description[0]}
            </CardText>

            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        {/* flex-item */}
        </div>
      ))}
    </div>
  </div>
)