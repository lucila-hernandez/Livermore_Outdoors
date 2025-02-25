// src/POPOSList.js

import React from 'react';
import OutdoorsSpace from './OutdoorsSpace';
import './OutdoorsList.css';
import data from './sfpopos-data.json'

function OutdoorsList() {

  const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <OutdoorsSpace
        id={i}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="OutdoorsList">
      { spaces }
    </div>
  )
}

export default OutdoorsList