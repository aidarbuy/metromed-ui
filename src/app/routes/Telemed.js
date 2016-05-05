import React from 'react';
import Helmet from 'react-helmet';
import TeleMed from '../components/WebRTC';

export default () => (
  <section>
  	<Helmet title="MetromedUC TeleMed" />

    <TeleMed/>
  </section>
);