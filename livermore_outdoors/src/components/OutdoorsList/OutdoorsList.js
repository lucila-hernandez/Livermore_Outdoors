// src/POPOSList.js

import React from 'react';
import OutdoorsSpace from '../OutdoorsSpace/OutdoorsSpace';
import './OutdoorsList.css';
import data from '../../livermore-data.js'
import { useState } from 'react'


function OutdoorsList() {

  const [ query, setQuery ] = useState('')

  const spaces = data
    .filter(obj => 
      obj.title.toLowerCase().includes(query.toLowerCase()) || 
      obj.address.toLowerCase().includes(query.toLowerCase())
    )
    .map((obj) => {
      const { id, title, address, images, hours } = obj;    
      return (
      <OutdoorsSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="OutdoorsList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  )
}

export default OutdoorsList