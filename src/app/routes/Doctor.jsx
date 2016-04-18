// src/app/routes/Doctor.jsx
import React from 'react';
import Helmet from 'react-helmet';

import Button from 
  'material-ui/lib/raised-button';
import DoctorsIcon 
	from 'material-ui/lib/svg-icons/navigation/arrow-back';

import doctors from '../data/doctors';

const styles = {
  header : {
    textTransform:'capitalize',
  },
  p : {
    textAlign:'left',
    margin:20,
  },
};

function getDoctor(id) {
  for (var i = doctors.length - 1; i >= 0; i--) {
    if (doctors[i].id == id) {
      return doctors[i];
    }
  }
}

export default React.createClass({
  render() {
    const { id } = this.props.params;
    const doctor = getDoctor(id);
    const src = "images/doctors/" + doctor.img.big;

    return (
    	<div>
        <Helmet 
          title={"Doctor " + doctor.firstname + " " + doctor.lastname} 
        />
        <div style={{textAlign:'left'}}>
          <Button 
            label="Back to All Doctors" 
            labelPosition="after"
            primary={true}
            icon={<DoctorsIcon />}
            style={styles.button}
            linkButton={true}
            href="/doctors"
          />
        </div>

        <h3 style={styles.header}>
        	Doctor {doctor.firstname} {doctor.lastname}
        </h3>

        <img width="100%" src={src}/>

        {doctor.description.map((p, i)=>(
        	<div key={i} style={styles.p}
        		dangerouslySetInnerHTML={{__html:p}}/>
        ))}
      </div>
    )
  }
});