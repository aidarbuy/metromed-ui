import React from 'react';

import FlatButton from 
  'material-ui/lib/flat-button'
import DoctorsIcon 
	from 'material-ui/lib/svg-icons/action/face';

import doctors from '../data/doctors';

const styles = {
  header : {
    textTransform:'capitalize',
  },
  p : {
    textAlign:'left',
    margin:20,
    // background:'red',
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
        <FlatButton 
          label="All Doctors" 
          labelPosition="after"
          primary={true}
          icon={<DoctorsIcon />}
          style={styles.button}
          linkButton={true}
          href="/doctors"
        />

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