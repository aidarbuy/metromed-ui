import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  // margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton 
    	label="Call Us Now!" 
    	primary={true} style={style} 
    	href="tel:1-703-687-4158" 
    />
  </div>
);

export default RaisedButtonExampleSimple;