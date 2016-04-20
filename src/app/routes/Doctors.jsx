// src/app/routes/Doctors.jsx
import React  from 'react';
import Helmet from 'react-helmet';

import dataDoctors from "../data/doctors";
import DoctorCard from '../components/DoctorCard';

export default React.createClass({
  render() {
    const doctors = dataDoctors.map((doc, i) => (
      <div key={doc.id} className="flex-item">
        <DoctorCard doc={doc} />
      </div>
    ));
    return (
      <div>
        <Helmet title="Doctors - Metromed UC"/>

        <h3>Doctors</h3>

        <div className="flex-container">
          {doctors}
        </div>
      </div>
    );
  }
});