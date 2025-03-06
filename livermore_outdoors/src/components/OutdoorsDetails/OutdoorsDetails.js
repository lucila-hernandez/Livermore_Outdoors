import React from 'react'
import { useParams } from 'react-router'
import data from '../../livermore-data.js'
import './OutdoorsDetails.css'
import OutdoorsFeatureList from '../OutdoorsFeatureList/OutdoorsFeatureList'

function OutdoorsDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]
  const mapsUrl = `https://www.google.com/maps?q=${geo.lat},${geo.lon}&output=embed`;

  return (
    <div className="OutdoorsDetails">
      <div className="OutdoorsDetails-info">
        <h1 className="OutdoorsDetails-title">{title}</h1>
        <p className="OutdoorsDetails-desc">{desc}</p>
        <p className="OutdoorsDetails-hours">{hours}</p>

        <OutdoorsFeatureList features={features} />
      </div>

      <div className="OutdoorsDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>

      {/* Map section added below the image */}
      <div className="OutdoorsDetails-mapSection">
        <iframe
          title={`Map of ${title}`}
          src={mapsUrl}
          width="100%"  // Make the map responsive
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default OutdoorsDetails;
