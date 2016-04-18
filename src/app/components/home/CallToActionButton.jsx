// src/app/components/home/CallToActionButton.jsx

import React from 'react';

import RaisedButton from 
	'material-ui/lib/raised-button';

export default () => (
  <RaisedButton 
  	label="Call Us Now" 
  	href="tel:1-703-687-4158" 
  	primary={false} 
  	secondary={true}
  	linkButton={true}
  />
);