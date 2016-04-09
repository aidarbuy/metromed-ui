
// src/app/routes/Primary.jsx

import React from 'react';

const text = [
  "Every patient should have a primary care provider (PCP).",
  "Your PCP <strong>sees you on a regular basis</strong>. ​He partners with you to <strong>optimize your health</strong>. ​He manages your <strong>chronic medical conditions</strong>,​ and addresses any new conditions as they arise.",
  "Your PCP sends you to see specialists as appropriate, and <strong>coordinates the activities​</strong> of the various specialists you see.",
  "All the specialists you see, and every ER or urgent care you go to, all of these places send reports to your PCP.",
  "Thus, the PCP is <strong>the central hub of your health care​</strong>.",
  "If you do not have a Primary Care Provider, it is recommended that you obtain one.",
  "Having a Primary Care Provider is the only reliable way to ensure that you are getting <strong>the appropriate medical care for all aspects of your health and well being​</strong>."
]

const styles = {
  p: {
    textAlign:'left',
  }
}

export default React.createClass({
  render() {
    return (
      <div className="article">

        <h3>
          What is a Primary Care Provider?
        </h3>

        <img width="100%" 
          src="images/primary/mbeckwith-white.jpg"
        />

        {text.map((paragraph, i) => (
          <p key={i}
            style={styles.p}
            dangerouslySetInnerHTML={{__html:paragraph}}
          />
        ))}

      </div>
    )
  }
})