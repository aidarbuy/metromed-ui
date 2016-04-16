// src/app/routes/Doctors.jsx

import React from "react";

import Card from
  'material-ui/lib/card/card';
import CardActions from 
  "material-ui/lib/card/card-actions";
import CardHeader from 
  "material-ui/lib/card/card-header";
import CardMedia from 
  "material-ui/lib/card/card-media";
import CardTitle from 
  "material-ui/lib/card/card-title";
import FlatButton from 
  "material-ui/lib/flat-button";
import CardText from 
  "material-ui/lib/card/card-text";
import RaisedButton from 
  'material-ui/lib/raised-button';

import doctors from "../data/doctors";

export default () => (
  <div>
    <h2>Doctors</h2>

    <div className="flex-container">
      {doctors.map((doc, i) => (
        <div key={doc.id} className="flex-item">
          <Card style={{margin:5,boxSizing:'border-box'}}>
            <CardMedia 
              overlay={
                <CardTitle 
                  title={"Dr. " + doc.firstname + " " + 
                    doc.lastname}
                />
              }
              overlayContentStyle={{
                background:'rgba(0, 188, 212, 0.7)',
                bottom:0,
                margin:0,
                padding:0,
              }}
              style={{background:'red'}}
            >
              <img src={'images/doctors/' + doc.img.big}
                style={{
                  background:'red',
                  padding:0,
                  margin:0,
                }}/>
            </CardMedia>

            <CardTitle 
              title={doc.speciality} 
              subtitle={doc.title} 
            />

            <CardText style={{
              textAlign:'left',
              fontSize:16,
            }}>
              {doc.description[0]}
            </CardText>

            <CardActions style={{textAlign:'right'}}>
              <RaisedButton 
                label="Read more"
                secondary={true}
                linkButton={true}
                href={"/doctors/" + doc.id}
              />
            </CardActions>
          </Card>
        {/* flex-item */}
        </div>
      ))}
    </div>
  </div>
)