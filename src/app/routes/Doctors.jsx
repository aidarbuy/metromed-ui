// src/app/routes/Doctors.jsx
import React from "react";
import Helmet from 'react-helmet';

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
import Button from 
  'material-ui/lib/raised-button';
import Icon from
  'material-ui/lib/svg-icons/navigation/arrow-forward';

import doctors from "../data/doctors";

export default React.createClass({
  getFullName(doc) {
    return doc.firstname + " " + doc.lastname;
  },
  getRouteName(doc) {
    var routeName;
    routeName = doc.firstname.toLowerCase() + "-" + doc.lastname.toLowerCase();
    console.log(routeName);
    return routeName;
  },
  render() {
    return (
      <div>
        <Helmet title="Doctors - Metromed UC"/>

        <h3>Doctors</h3>

        <div className="flex-container">
          {doctors.map((doc, i) => (
            <div key={doc.id} className="flex-item">
              <Card style={{
                margin:5,
                boxSizing:'border-box',
                minHeight:490
              }}>
                <CardMedia 
                  overlay={
                    <CardTitle 
                      title={"Dr. " + this.getFullName(doc)}
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

                <CardTitle title={doc.speciality} subtitle={doc.title} />

                <CardText className="doctors-card-text">
                  {doc.description[0]}
                </CardText>

                <CardActions style={{textAlign:'right'}}>
                  <Button 
                    label="Read more"
                    icon={<Icon/>}
                    labelPosition="before"
                    secondary={true}
                    linkButton={true}
                    href={
                      "/doctors/" + this.getRouteName(doc)
                    }
                  />
                </CardActions>
              </Card>
            {/* flex-item */}
            </div>
          ))}
        </div>
      </div>
    );
  }
});