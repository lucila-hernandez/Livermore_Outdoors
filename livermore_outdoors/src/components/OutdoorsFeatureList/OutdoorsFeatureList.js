import React from 'react'
import OutdoorsFeature from '../OutdoorsFeature/OutdoorsFeature'
import './OutdoorsFeatureList.css'

function OutdoorsFeatureList(props) {
  const icons = props.features.map((feature) => {
    return <OutdoorsFeature key={feature} name={feature} />
  })
  return <div className="OutdoorsFeatureList">{icons}</div>
}

export default OutdoorsFeatureList