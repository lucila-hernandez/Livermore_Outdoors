import React from 'react'
import { useParams } from 'react-router'
import data from '../../livermore-data.js'
import './OutdoorsDetails.css'
import OutdoorsFeatureList from '../OutdoorsFeatureList/OutdoorsFeatureList'



function OutdoorsDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className="OutdoorsDetails">
      <div className="OutdoorsDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>

      <div className ="OutdoorsDetails-info">
        <h1 className="OutdoorsDetails-title">{ title }</h1>
        <p className="OutdoorsDetails-desc">{ desc }</p>
        <p className="OutdoorsDetails-hours">{ hours }</p>

        <OutdoorsFeatureList features={features} />

        <p className="OutdoorsDetails-geo">{geo.lat} {geo.lon}</p>

      </div>

    </div>
  )
}

export default OutdoorsDetails